import { Button, Checkbox } from 'antd';
import Link from 'antd/lib/typography/Link';
import { MDBBtn } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { Question, QuestionChoice } from '../common/define-type'

interface MyProps {
    showUniAdvisor: React.Dispatch<React.SetStateAction<boolean>>
    showCareerAdvisor: React.Dispatch<React.SetStateAction<boolean>>
}

let questionLst: Question[] = [
    {
        id: '1',
        content: "Bạn đánh giá thế nào về khả năng viết văn/ làm thơ của mình?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '2',
        content: "Bạn đánh giá thế nào về khả năng học một ngôn ngữ mới của mình?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '3',
        content: "Bạn thấy khả năng đọc và làm việc với giấy tờ, văn bản, tài liệu của mình như thế nào?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '4',
        content: "Hãy đánh giá khả năng dùng lời nói để truyền đạt đến mọi người (Thuyết trình, hướng dẫn, giải thích,...)?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '5',
        content: "Bạn hãy đánh giá khả năng tranh luận của mình (Diễn giải lưu loát, rõ nghĩa, logic, thuyết phục được người khác)?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '6',
        content: "Khả năng nhận ra các lỗi chính tả và ngữ pháp khi bạn đọc một đoạn văn/bài viết?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '7',
        content: "Khả năng sử dụng từ điển để tra nghĩa từ mới và sử dụng từ ngữ đó đúng ngữ cảnh?",
        choiceLst:  [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '8',
        content: "Mức độ tự tin của bạn khi đứng giữa một đám đông xa lạ?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '9',
        content: "Bạn thấy mình có phải một người nói chuyện thu hút trước đám đông?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '10',
        content: "Hãy đánh giá khả năng đọc và hiểu những gì người khác viết ra của bạn?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '11',
        content: "Bạn có thường tìm hiểu về phương pháp hoặc các loại hình kinh doanh hiệu quả mà bạn nhìn thấy xung quanh không?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '12',
        content: "Khi giải một bài toán, bạn có thường phân tích sâu và tìm nhiều lời giải khác nhau cho nó?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '13',
        content: "Hãy đánh giá khả năng dự đoán kết quả của bạn,dựa trên những dữ kiện hoặc căn cứ có sẵn?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '14',
        content: "Hãy đánh giá khả năng của bạn trong việc phân tích dữ liệu/ số liệu cụ thể để dự báo một xu hướng nào đó?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '15',
        content: "Khả năng thu thập và sắp xếp thông tin, dữ liệu của bạn để người khác có thể dễ dàng hiểu và sử dụng nó?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '16',
        content: "Khả năng áp dụng một cách logic các thông tin và kiến thức để giải quyết vấn đề?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '17',
        content: "Khả năng áp dụng các nguyên tắc/công thức (Trong các môn học như Toán, Lý, Hóa,...) để tìm ra lời giải?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '18',
        content: "Hãy đánh giá độ nhanh nhạy và khéo léo của bạn khi đưa ra quyết định trong những tình huống cấp bách?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '19',
        content: "Hãy đánh giá khả năng thu thập, nghiên cứu và phân tích thông tin hoặc dữ liệu của bạn?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '20',
        content: "Năng lực tính toán, làm việc với những con số của bạn?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '21',
        content: "Hãy đánh giá khả năng sáng tạo ra những đồ vật mới từ ý tưởng của chính mình (Có thể là đồ dùng hàng ngày như quần áo, giày dép,... cho tới đồ vật lưu niệm)?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '22',
        content: "Hãy đánh giá khả năng tạo ra mô hình đồ vật (bản sao) từ những đồ vật có sẵn?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '23',
        content: "Hãy đánh giá khả năng của bạn trong việc sắp đặt các hình ảnh hoặc đồ vật theo trình tự đẹp mắt, nghệ thuật?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '24',
        content: "Khả năng vẽ phác họa của bạn (Sử dụng chì, màu nước, sơn hoặc bất cứ chất liệu nào để sao chép lại hình ảnh/ sự vật)?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '25',
        content: "Khả năng trang trí, phối hợp màu các màu sắc sao cho đẹp mắt của bạn?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '26',
        content: "Khả năng minh họa những suy nghĩ, ý tưởng của bạn dưới dạng hình ảnh để người khác dễ hiểu được (Vẽ tranh, điêu khắc, thêu thùa,...)?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '27',
        content: "Khả năng vẽ tranh của bạn (Sử dụng nhiều công cụ để tạo thành tác phẩm nghệ thuật)?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '28',
        content: "Khả năng làm việc với hình khối/ sử dụng các nguyên tắc hình học không gian để ứng dụng trong mỹ thuật hoặc đời sống?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '29',
        content: "Khả năng làm ra các sản phẩm handmade (Thêu thùa, gấp, uốn, đính kết,... các vật liệu)?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '30',
        content: "Khả năng làm đẹp cho bản thân và mọi người (Trang trí lại/trang điểm hoặc phối chọn quần áo,...)?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '31',
        content: "Hãy đánh giá khả năng lãnh đạo nhóm của bạn (Năng lực đề xuất và giải quyết các vấn đề)?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '32',
        content: "Khả năng hòa nhập và gắn kết với nhóm, cùng mọi người hoàn thành tốt mục tiêu?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '33',
        content: "Khả năng lập kế hoạch cho các hoạt động và sự kiện của bạn?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '34',
        content: "Khả năng nhận biết và am hiểu tính cách, mối tương quan lẫn nhau giữa người với người?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '35',
        content: "Khả năng vận dụng sự thấu hiểu của mình để giúp hòa giải các mối quan hệ khi có xung đột?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '36',
        content: "Khả năng động viên, dẫn dắt giúp mọi người hiểu rõ bản thân và các cơ hội để đưa ra quyết định?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '37',
        content: "Khả năng lý giải được cảm giác và hành vi của những người xung quanh?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '38',
        content: "Khả năng làm việc với người đau ốm hoặc khiếm khuyết về mặt thể chất?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '39',
        content: "Khả năng trình bày ý tưởng để thuyết phục mọi người mua một đồ vật hoặc đồng ý với một đề xuất của mình?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '40',
        content: "Khả năng làm quen, trò chuyện với người lạ?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '41',
        content: "Bạn có thường xuyên tìm tòi, khám phá cấu tạo hoặc cơ chế hoạt động của máy móc, thiết bị, công cụ dụng cụ,...?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '42',
        content: "Khả năng đánh giá rủi ro và tìm tòi sửa chữa máy móc, thiết bị, công cụ dụng cụ hoặc áp dụng các kiến thức, mẹo vặt để chúng vận hành trơn tru?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '43',
        content: "Bạn thường dành nhiều thời gian để làm việc ngoài trời như đồng ruộng, rừng, công trình xây dựng,... ?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '44',
        content: "Bạn có năng khiếu trong chuyện tìm hiểu khoa học như các nguyên lý, định luật vật lý giúp cho máy móc hoặc thiết bị vận hành?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '45',
        content: "Khả năng vận động yêu cầu phối hợp tốt giữa tay, chân và nhiều bộ phận cơ thể khác không?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '46',
        content: "Sức bền và sức mạnh thể chất của bạn như thế nào (Ví dụ yêu cầu chạy bộ cự li dài, luyện tập cường độ cao,...)?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '47',
        content: "Khả năng điều khiển chuyển động của tay để thực hiện những công việc đòi hỏi sự khéo léo, tinh xảo?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '48',
        content: "Khả năng giữ thăng bằng của bạn như thế nào?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '49',
        content: "Khả năng của bạn nếu được yêu cầu làm công việc phải khuân vác nặng?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '50',
        content: "Hãy đánh giá mức độ thể trạng của bạn (Mức độ khỏe manh, không dễ mắc bệnh như cảm cúm, nhức đầu,...)?",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '51',
        content: "Bạn có thích trêu chó không",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '52',
        content: "Bạn có thích trêu chó không",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '53',
        content: "Bạn có thích trêu chó không",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '54',
        content: "Bạn có thích trêu chó không",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '55',
        content: "Bạn có thích trêu chó không",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '56',
        content: "Bạn có thích trêu chó không",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '57',
        content: "Bạn có thích trêu chó không",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '58',
        content: "Bạn có thích trêu chó không",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '59',
        content: "Bạn có thích trêu chó không",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    {
        id: '60',
        content: "Bạn có thích trêu chó không",
        choiceLst: [
            {
                content: 'Rất thấp',
                score: 1
            },
            {
                content: 'Thấp',
                score: 2
            },
            {
                content: 'Cao',
                score: 3
            },
            {
                content: 'Rất cao',
                score: 4
            }
        ],
        pickedChoice: null
    },
    // {
    //     id: '61',
    //     content: "Bạn có thích trêu chó không",
    //     choiceLst: [
    //         {
    //             content: 'Rất thấp',
    //             score: 1
    //         },
    //         {
    //             content: 'Thấp',
    //             score: 2
    //         },
    //         {
    //             content: 'Cao',
    //             score: 3
    //         },
    //         {
    //             content: 'Rất cao',
    //             score: 4
    //         }
    //     ],
    //     pickedChoice: null
    // },
]



const CCareerAdvisor = (props: MyProps) => {
    const history = useHistory();
    const [showQuestion, setShowQuestion] = useState(true);
    const [showResult, setShowResult] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(1);
    const [currentChoice1, setCurrentChoice1] = useState<string|null>();
    const [currentChoice2, setCurrentChoice2] = useState<string|null>();
    const [currentChoice3, setCurrentChoice3] = useState<string|null>();
    const [currentChoice4, setCurrentChoice4] = useState<string|null>();
    const [currentChoice5, setCurrentChoice5] = useState<string|null>();

    const[showBtnResult,setShowBtnResult] = useState(false);

    useEffect(() => {
        let check=true
        questionLst.forEach(item => {
            if(item.pickedChoice===null){
                check=false
                return
            }
        })
        if(check===true) setShowBtnResult(true);
        else setShowBtnResult(false)
        console.log(showBtnResult)
        console.log(questionLst)
    }, [currentChoice1,currentChoice2,currentChoice3,currentChoice4,currentChoice5])

   

    return (
        <div className='div-advisor-content' style={{width:"100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <div style={{margin:'20px',marginTop:'50px', backgroundColor:'white',borderRadius: '20px',marginBottom: '53px'}}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                fontSize:'35px',
                marginBottom: '60px',
                marginTop: '77px'
            }}>
                <div >Chọn câu trả lời phù hợp nhất với bạn nha</div>
            </div>
            <div style={{paddingLeft: 150,paddingRight:150}}>
            {
                showQuestion &&
                <>
                    <h3>Câu {currentQuestionIndex}:</h3>
                    <h4>{questionLst[currentQuestionIndex-1].content}</h4>
                    <div style={{ display: 'flex' }}>
                        {
                            questionLst[currentQuestionIndex-1].choiceLst.map(item => (
                                <div style={{ display: 'flex', padding: 20 }}>
                                    <input
                                        onChange={()=>{
                                            questionLst[currentQuestionIndex-1].pickedChoice = item.score;
                                            setCurrentChoice1(item.content);
                                        }}
                                        checked={item.score === questionLst[currentQuestionIndex-1].pickedChoice}
                                        name = {questionLst[currentQuestionIndex-1].content}
                                        value={item.score} className="form-check-input"
                                        type="checkbox"
                                    />
                                    <label style={{ fontSize: 20 }} className="form-check-label" >{item.content}</label>

                                </div>
                            ))
                            
                        }
                        
                    </div>
                    
                    <h3>Câu {currentQuestionIndex + 1}:</h3>
                    <h4>{questionLst[currentQuestionIndex].content}</h4>
                    <div style={{ display: 'flex' }}>
                        {
                            questionLst[currentQuestionIndex].choiceLst.map(item => (
                                <div style={{ display: 'flex', padding: 20 }}>
                                    <input
                                        onChange={()=>{
                                            questionLst[currentQuestionIndex].pickedChoice = item.score;
                                            setCurrentChoice2(item.content);
                                        }}
                                        checked={item.score === questionLst[currentQuestionIndex].pickedChoice}
                                        name = {questionLst[currentQuestionIndex].content}
                                        value={item.content} className="form-check-input"
                                        type="checkbox"
                                    />
                                    <label style={{ fontSize: 20 }} className="form-check-label" >{item.content}</label>

                                </div>
                            ))
                            
                        }
                        
                    </div>

                    <h3>Câu {currentQuestionIndex+2 }:</h3>
                    <h4>{questionLst[currentQuestionIndex+1].content}</h4>
                    <div style={{ display: 'flex' }}>
                        {
                            questionLst[currentQuestionIndex+1].choiceLst.map(item => (
                                <div style={{ display: 'flex', padding: 20 }}>
                                    <input
                                        onChange={()=>{
                                            questionLst[currentQuestionIndex+1].pickedChoice = item.score;
                                            setCurrentChoice3(item.content);
                                        }}
                                        checked={item.score === questionLst[currentQuestionIndex+1].pickedChoice}
                                        name = {questionLst[currentQuestionIndex+1].content}
                                        value={item.content} className="form-check-input"
                                        type="checkbox"
                                    />
                                    <label style={{ fontSize: 20 }} className="form-check-label" >{item.content}</label>

                                </div>
                            ))
                            
                        }
                        
                    </div>

                    <h3>Câu {currentQuestionIndex+3}:</h3>
                    <h4>{questionLst[currentQuestionIndex+2].content}</h4>
                    <div style={{ display: 'flex' }}>
                        {
                            questionLst[currentQuestionIndex+2].choiceLst.map(item => (
                                <div style={{ display: 'flex', padding: 20 }}>
                                    <input
                                        onChange={()=>{
                                            questionLst[currentQuestionIndex+2].pickedChoice = item.score;
                                            setCurrentChoice4(item.content);
                                        }}
                                        checked={item.score === questionLst[currentQuestionIndex+2].pickedChoice}
                                        name = {questionLst[currentQuestionIndex+2].content}
                                        value={item.content} className="form-check-input"
                                        type="checkbox"
                                    />
                                    <label style={{ fontSize: 20 }} className="form-check-label" >{item.content}</label>

                                </div>
                            ))
                            
                        }
                        
                    </div>

                    <h3>Câu {currentQuestionIndex+4}:</h3>
                    <h4>{questionLst[currentQuestionIndex+3].content}</h4>
                    <div style={{ display: 'flex' }}>
                        {
                            questionLst[currentQuestionIndex+3].choiceLst.map(item => (
                                <div style={{ display: 'flex', padding: 20 }}>
                                    <input
                                        onChange={()=>{
                                            questionLst[currentQuestionIndex+3].pickedChoice = item.score;
                                            setCurrentChoice5(item.content);
                                        }}
                                        checked={item.score === questionLst[currentQuestionIndex+3].pickedChoice}
                                        name = {questionLst[currentQuestionIndex+3].content}
                                        value={item.content} className="form-check-input"
                                        type="checkbox"
                                    />
                                    <label style={{ fontSize: 20 }} className="form-check-label" >{item.content}</label>

                                </div>
                            ))
                            
                        }
                        
                    </div>

                    
                </>
            }
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginTop: '40px'
            }}>
                <div>
                    <nav aria-label="...">
                        <ul className="pagination pagination-circle">
                        
                            <li className={`page-item ${currentQuestionIndex === 1? 'active': ''}`}><a className="page-link" href="#" onClick={()=>{
                                setCurrentQuestionIndex(1);
                                setCurrentChoice1(null)
                                setCurrentChoice2(null)
                                setCurrentChoice3(null)
                                setCurrentChoice4(null)
                                setCurrentChoice5(null)
                            }}>1</a>
                            </li>
                            <li className={`page-item ${currentQuestionIndex === 6? 'active': ''}`}><a className="page-link" href="#" onClick={()=>{
                                setCurrentQuestionIndex(6)
                                setCurrentChoice1(null)
                                setCurrentChoice2(null)
                                setCurrentChoice3(null)
                                setCurrentChoice4(null)
                                setCurrentChoice5(null)
                                }}>2</a>
                            </li>
                            <li className={`page-item ${currentQuestionIndex === 11? 'active': ''}`}><a className="page-link" href="#" onClick={()=>{
                                setCurrentQuestionIndex(11)
                                setCurrentChoice1(null)
                                setCurrentChoice2(null)
                                setCurrentChoice3(null)
                                setCurrentChoice4(null)
                                setCurrentChoice5(null)
                                }}>3<span className="visually-hidden"></span></a>
                            </li>
                            <li className={`page-item ${currentQuestionIndex === 16? 'active': ''}`}><a className="page-link" href="#" onClick={()=>{
                                setCurrentQuestionIndex(16)
                                setCurrentChoice1(null)
                                setCurrentChoice2(null)
                                setCurrentChoice3(null)
                                setCurrentChoice4(null)
                                setCurrentChoice5(null)
                                }}>4</a>
                            </li>
                            <li className={`page-item ${currentQuestionIndex === 21? 'active': ''}`}><a className="page-link" href="#" onClick={()=>{
                                setCurrentQuestionIndex(21)
                                setCurrentChoice1(null)
                                setCurrentChoice2(null)
                                setCurrentChoice3(null)
                                setCurrentChoice4(null)
                                setCurrentChoice5(null)
                                }}>5</a>
                            </li>
                            <li className={`page-item ${currentQuestionIndex === 26? 'active': ''}`}><a className="page-link" href="#" onClick={()=>{
                                setCurrentQuestionIndex(26)
                                setCurrentChoice1(null)
                                setCurrentChoice2(null)
                                setCurrentChoice3(null)
                                setCurrentChoice4(null)
                                setCurrentChoice5(null)
                                }}>6</a>
                            </li>
                            <li className={`page-item ${currentQuestionIndex === 31? 'active': ''}`}><a className="page-link" href="#" onClick={()=>{
                                setCurrentQuestionIndex(31)
                                setCurrentChoice1(null)
                                setCurrentChoice2(null)
                                setCurrentChoice3(null)
                                setCurrentChoice4(null)
                                setCurrentChoice5(null)
                                }}>7</a>
                            </li>
                            <li className={`page-item ${currentQuestionIndex === 36? 'active': ''}`}><a className="page-link" href="#" onClick={()=>{
                                setCurrentQuestionIndex(36)
                                setCurrentChoice1(null)
                                setCurrentChoice2(null)
                                setCurrentChoice3(null)
                                setCurrentChoice4(null)
                                setCurrentChoice5(null)
                                }}>8</a>
                            </li>
                            <li className={`page-item ${currentQuestionIndex === 41? 'active': ''}`}><a className="page-link" href="#" onClick={()=>{
                                setCurrentQuestionIndex(41)
                                setCurrentChoice1(null)
                                setCurrentChoice2(null)
                                setCurrentChoice3(null)
                                setCurrentChoice4(null)
                                setCurrentChoice5(null)
                                }}>9</a>
                            </li>
                            <li className={`page-item ${currentQuestionIndex === 46? 'active': ''}`}><a className="page-link" href="#" onClick={()=>{
                                setCurrentQuestionIndex(46)
                                setCurrentChoice1(null)
                                setCurrentChoice2(null)
                                setCurrentChoice3(null)
                                setCurrentChoice4(null)
                                setCurrentChoice5(null)
                                }}>10</a>
                            </li>
                            <li className={`page-item ${currentQuestionIndex === 51? 'active': ''}`}><a className="page-link" href="#" onClick={()=>{
                                setCurrentQuestionIndex(51)
                                setCurrentChoice1(null)
                                setCurrentChoice2(null)
                                setCurrentChoice3(null)
                                setCurrentChoice4(null)
                                setCurrentChoice5(null)
                                }}>11</a>
                            </li>
                            <li className={`page-item ${currentQuestionIndex === 56? 'active': ''}`}><a className="page-link" href="#" onClick={()=>{
                                setCurrentQuestionIndex(56)
                                setCurrentChoice1(null)
                                setCurrentChoice2(null)
                                setCurrentChoice3(null)
                                setCurrentChoice4(null)
                                setCurrentChoice5(null)
                                }}>12</a>
                            </li>
                            

                        </ul>
                    </nav>
                </div>
            </div>
            
            {
                showBtnResult && 
                <div style={{width:"100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: '30px'
                }}>
                    <MDBBtn color='warning' style={{
                            borderRadius:'20px'
                    }}>Xem kết quả</MDBBtn>
                </div>
                
            }                
            </div>
        </div>
    )
}

export default CCareerAdvisor