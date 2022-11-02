import { MDBBtn } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import AdvisorApi from '../api/Advisor/advisor.api';
import { Question, QuestionRequest, suitablePersonality } from '../common/define-type';
import { useDispatchRoot } from '../redux/store';
import CResultsCareer from './CResultsCareer';

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
    },{
        id: '6',
        content: "Khả năng sử dụng từ điển để tra nghĩa từ mới và sử dụng từ ngữ đó đúng ngữ cảnh?",
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
        content: "Bạn có hay kiểm tra độ chính xác của câu từ, ngữ pháp và chính tả?",
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
        id: '8',
        content: "Khả năng viết lên ý tưởng, suy nghĩ và trải nghiệm của bạn thành lời để mọi người thích đọc những gì bạn viết ra (Bài viết có thể viết dưới dạng bài văn, bài báo, truyện, thơ, báo cáo)?",
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
        content: "Khả năng dùng lời nói để trình bày ý tưởng với mọi người, giảng dạy, thuyết trình, làm mẫu hoặc diễn thuyết của bạn như thế nào?",
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
        content: "Cách nói chuyện của bạn có cuốn hút người khác không (Sử dụng ngôn ngữ chính xác, nói rõ ràng mạch lạc)?",
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
        content: "Khả năng đọc hiểu những gì người khác viết ra, phát hiện ra sai sót trong văn bản viết của bạn như thế nào?",
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
        content: "Khi người khác nói, bạn có thể tập trung thấu hiểu và không bỏ sót chi tiết nào không?",
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
        content: "Bạn có hay dành nhiều sự chú ý tới các mô hình kinh doanh xung quanh mình không (Tìm ra điểm bất cập trong mô hình đó và đưa ra phương án cải thiện)?",
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
        content: "Khả năng đào sâu nghiên cứu để hiểu rõ ý nghĩa của 1 thông tin nào đó (Áp dụng toán học và thống kê để tìm ra điểm đặc biệt của thông tin từ đó suy ra xu hướng)?",
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
        content: "Khả năng dự báo những thứ có thể xảy ra dựa trên tính toán dữ liệu có sẵn và đề ra kế hoạch tương lai?",
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
        content: "Bạn đánh giá sao về khả năng sử dụng con số, tìm kiếm bằng chứng và kiểm tra phép tính của mình nhỉ?",
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
        content: "Khả năng sắp xếp thông tin theo trình tự để người khác dễ hiểu và dễ sử dụng của bạn như thế nào?",
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
        content: "Khả năng giải ô chữ, giải quyết các vấn đề thuộc nhiều lĩnh vực bằng cách sử dụng kiến thức và thông tin chính xác của bạn như thế nào?",
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
        content: "Khả năng sử dụng các nguyên tác toán học, thống kê, vật lý, hóa học để tìm hiểu và giải quyết vấn đề của bạn như thế nào?",
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
        content: "Trong tình huống cấp bách, bạn có thể bình tĩnh nắm được những gì đang diễn ra để ứng biến và đưa ra hành động hợp lý tiếp theo hay không?",
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
        content: "Khả năng xác định vấn đề, xây dụng các phương pháp nghiên cứu, thu thập và phân tích thông tin để hiểu rõ hoặc giải quyết vấn đề của bạn như thế nào nhỉ?",
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
        content: "Bạn có hay áp dụng các nguyên tác số học và đại số để tìm hiểu vấn đề hoặc thực hiện nhiệm vụ hay không?",
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
        content: "Bạn có thích làm việc với các con số, thường xuyên áp dụng số học và đại số vào đời sống?",
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
        content: "Bạn đánh giá sao về độ tỉ mỉ của bản thân như thế nào khi áp dụng cộng, trừ, nhân, chia, áp dụng công thức để ra đáp áp chính xac?",
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
        content: "Khả năng suy nghĩ, sáng tạo để tạo ra đồ vật hoàn toàn mới?",
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
        content: "Khả năng tạo ra bản sao của các vật thông qua quan sát và tưởng tượng?",
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
        content: "Khả năng sắp đặt bố trí các vật thể cho đẹp hoặc tạo ra các sản phẩm hữu dụng từ các chất liệu khác nhau (gỗ, vải, đất sét,..)?",
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
        content: "Khả năng hội họa bằng các vật liệu khác nhau như sơn, bút chì, than hoặc các vật liệu bất kỳ?",
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
        content: "Khả năng phối hợp màu sắc, trang trí để không gian hoặc đồ vật trông đẹp mắt hơn của bạn ra sao?",
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
        content: "Khả năng hình tượng hóa ý tưởng, trải nghiệm của bạn để mọi người thấy hứng thú (Có thể là tranh vẽ, tượng, điêu khắc, thuê thùa, sơn mài,..)?",
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
        content: "Khả năng tạo ra các sản phẩm dùng hằng ngày từ trí tưởng tượng của bạn (Quần áo, vật dụng, đồ trang sức,..)?",
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
        content: "Khả năng tạo ra công trình kiến trúc, cầu đường, ô tô, máy móc từ trí tưởng tượng của bạn?",
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
        content: "Khả năng thành thạo sác công cụ, vật liệu như: cọ vẽ, bút chì, khuôn,.. để vẽ và tạo ra các sản phẩm có tính nghệ thuật?",
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
        content: "Khả năng áp dụng các định lý hình học để xây dựng, sáng tạo và gia cố các sản phẩm hoặc có hứng thú khi làm việc với các hình khối khác nhau?",
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
        content: "Bạn có khả năng uốn, gấp, ghép, đính và nối các vật liệu để tạo ra sản phẩm không?",
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
        content: "Khả năng trang trí lại các đồ vật cho đẹp mắt hơn. Sử  dụng các kỹ thuật, mỹ phẩm, quần áo, trang sức khác nhau để làm đẹp cho mọi người, đồ vật của bạn ra sao?",
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
        content: "Bạn đánh giá sao về khả năng lãnh đạo nhóm của mình (Đề ra phương thức làm việc cùng nhau, cùng nhau giải quyết vấn đề, cùng làm việc theo nhóm để thực hiện mục tiêu)?",
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
        content: "Bạn có hứng thú với việc tìm hiểu cách hoạt động kinh doanh. Tìm hiểu những con người trong đó và cách hành xử của họ. Giúp mọi người hoàn thành tốt trách nhiệm của họ trong kinh doanh?",
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
        content: "Khả năng lên kế hoạch tổ chức hội họp và hoạt động, sắp xếp các buổi gặp gỡ, quản lý các sự kiện của bạn như thế nào?",
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
        content: "Bạn có khả năng giúp mọi người trong một nhóm hoạt động hiệu quả hài hòa với nhau hay không?",
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
        content: "Bạn có chủ động tìm hiểu một nhóm hoạt động như thế nào hay không, hoặc để ý xem những thành viên trong nhóm ảnh hưởng lẫn nhau như thế nào hay không?",
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
        content: "Bạn có nắm được mối quan hệ giữa người với người và sử dụng khéo léo các phương pháp tâm lý để giúp mọi người quan hệ với nhau theo cách tích cực hay không?",
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
        content: "Bạn giúp người khác hiểu được nguyện vọng và mục tiêu của họ, giúp họ chọn ra con đường tốt nhất để đạt được mục tiêu?",
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
        content: "Dễ dàng đồng cảm, thấu hiểu cảm xúc của người khác. Chủ động đặt mình vào hoàn cảnh của họ để hiểu được lý do vì sao họ lại làm vậy?",
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
        content: "Có khả năng áp dụng kiến thức y tế để chăm sóc người đau ốm về mặt thể chất, luôn luôn nhiệt tình giúp đỡ mỗi khi họ cần?",
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
        content: "Có khả năng sử dụng các kỹ thuật để giúp đỡ những người khủng hoảng tâm lý. Nhạy cảm với tâm trạng và cảm xúc của mọi người?",
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
        content: "Khả năng trình bày cũng như thuyết phục người khác với ý kiến của bạn?",
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
        content: "Khả năng tự tin cởi mở và hòa nhập của bạn với một đám đông người lạ mặt?",
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
        content: "Bạn nghĩ bản thân mình có phù hợp làm việc tại nơi có nhiều máy móc, dụng cụ lao động sản xuất hay không?",
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
        content: "Bạn đánh giá khả năng làm việc với máy móc, hứng thú với chúng và chủ động tìm kiếm nguyên nhân máy móc hỏng hóc để sửa chữa và phòng tránh ra sao?",
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
        content: "Bạn có thích làm việc ngoài trời như ở vườn ruộng, công trường, rừng, sân chơi, ...",
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
        content: "Bạn có hay nghiên cứu cơ chế hoạt động của máy móc dựa trên các nguyên tắc vật lý hay không (đòn bẩy, quán tính, nhiệt độ, ma sát,...)",
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
        content: "Khả năng vận động cơ thể, kết hợp các nhóm cơ để thực hiện các động tác thể thao một cách điêu luyện",
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
        content: "Khả năng vận động cơ thể dưới một cường độ cao liên tục khi chơi thể thao của bạn ra sao (Các hoạt động này đòi hỏi bạn phải tiêu tốn lượng lớn năng lượng trong 1 khoảng thời gian dài mà không bị mệt mỏi)",
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
        content: "Khả năng sửa chữa máy móc và làm nó hoạt động trơn chu hiệu quả trở lại ?",
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
        content: "Tham gia các công việc đòi hỏi nhiều thể lực mà không hề mệt mỏi?",
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
        content: "Bạn đánh giá khả năng thành thạo các loại máy móc để làm việc của mình cao không (máy nâng, cắt, uốn, cuộn, ghép, khoan các vật liệu như kim loại, đá đất, các vật liệu nhân tạo,...) như thế nào",
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
        content: "Khả năng sử dụng cơ thể để thực hiện một loạt các động tác trong một khoảng thời gian ngắn mà không có sự sai sót?",
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
        content: "Khả năng sử dụng chuyển động tay để làm các nhiệm vụ đòi hỏi sự tinh xảo của bạn như thế nào?",
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
        content: "Bạn có khả năng uốn dẻo các khớp, kéo căng và di chuyển cơ thể một cách uyển chuyển ở những tư thế khó (thể thao chuyên nghiệp hoặc nhảy múa, ...) hay không?",
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

const testArray = [
    {
        "question_id": 1,
        "score": 1
    },
    {
        "question_id": 2,
        "score": 2
    },
    {
        "question_id": 3,
        "score": 4
    },
    {
        "question_id": 4,
        "score": 4
    },
    {
        "question_id": 5,
        "score": 4
    },
    {
        "question_id": 6,
        "score": 4
    },
    {
        "question_id": 7,
        "score": 1
    },
    {
        "question_id": 8,
        "score": 2
    },
    {
        "question_id": 9,
        "score": 4
    },
    {
        "question_id": 10,
        "score": 2
    },
    {
        "question_id": 11,
        "score": 1
    },
    {
        "question_id": 12,
        "score": 2
    },
    {
        "question_id": 13,
        "score": 1
    },
    {
        "question_id": 14,
        "score": 3
    },
    {
        "question_id": 15,
        "score": 4
    },
    {
        "question_id": 16,
        "score": 4
    },
    {
        "question_id": 17,
        "score": 3
    },
    {
        "question_id": 18,
        "score": 2
    },
    {
        "question_id": 19,
        "score": 4
    },
    {
        "question_id": 20,
        "score": 1
    },
    {
        "question_id": 21,
        "score": 2
    },
    {
        "question_id": 22,
        "score": 1
    },
    {
        "question_id": 23,
        "score": 4
    },
    {
        "question_id": 24,
        "score": 4
    },
    {
        "question_id": 25,
        "score": 4
    },
    {
        "question_id": 26,
        "score": 4
    },
    {
        "question_id": 27,
        "score": 1
    },
    {
        "question_id": 28,
        "score": 2
    },
    {
        "question_id": 29,
        "score": 4
    },
    {
        "question_id": 30,
        "score": 4
    },
    {
        "question_id": 31,
        "score": 1
    },
    {
        "question_id": 32,
        "score": 2
    },
    {
        "question_id": 33,
        "score": 2
    },
    {
        "question_id": 34,
        "score": 4
    },
    {
        "question_id": 35,
        "score": 1
    },
    {
        "question_id": 36,
        "score": 4
    },
    {
        "question_id": 37,
        "score": 3
    },
    {
        "question_id": 38,
        "score": 2
    },
    {
        "question_id": 39,
        "score": 4
    },
    {
        "question_id": 40,
        "score": 3
    },
    {
        "question_id": 41,
        "score": 2
    },
    {
        "question_id": 42,
        "score": 2
    },
    {
        "question_id": 43,
        "score": 1
    },
    {
        "question_id": 44,
        "score": 3
    },
    {
        "question_id": 45,
        "score": 4
    },
    {
        "question_id": 46,
        "score": 4
    },
    {
        "question_id": 47,
        "score": 3
    },
    {
        "question_id": 48,
        "score": 1
    },
    {
        "question_id": 49,
        "score": 4
    },
    {
        "question_id": 50,
        "score": 3
    },
    {
        "question_id": 51,
        "score": 2
    },
    {
        "question_id": 52,
        "score": 2
    },
    {
        "question_id": 53,
        "score": 4
    },
    {
        "question_id": 54,
        "score": 3
    },
    {
        "question_id": 55,
        "score": 2
    },
    {
        "question_id": 56,
        "score": 1
    },
    {
        "question_id": 57,
        "score": 2
    },
    {
        "question_id": 58,
        "score": 1
    },
    {
        "question_id": 59,
        "score": 3
    },
    {
        "question_id": 60,
        "score": 4
    }
]



const CCareerAdvisor = (props: MyProps) => {    
    const history = useHistory();
    const dispatch = useDispatchRoot();
    // const { specializedLst} = useSelectorRoot(state => state.advisor);

    const [showQuestion, setShowQuestion] = useState(true);
    const [showResult, setShowResult] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(1);
    const [currentChoice1, setCurrentChoice1] = useState<string|null>();
    const [currentChoice2, setCurrentChoice2] = useState<string|null>();
    const [currentChoice3, setCurrentChoice3] = useState<string|null>();
    const [currentChoice4, setCurrentChoice4] = useState<string|null>();
    const [currentChoice5, setCurrentChoice5] = useState<string|null>();
    const [specializedLst,setSpecializedLst] = useState<suitablePersonality[]>([]);

    const [showBtnResult, setShowBtnResult] = useState(false);
    const [isShowResultCareer, setIsShowResultCareer] = useState(false);
    const [questionRequest,setQuestionRequest] = useState<QuestionRequest[]|null>()

    useEffect(() => {
        let check = true
        questionLst.forEach(item => {
            if (item.pickedChoice === null) {
                check = false
                return
            }
        })
        if (check === true) setShowBtnResult(true);
        else setShowBtnResult(false)
    }, [currentChoice1, currentChoice2, currentChoice3, currentChoice4, currentChoice5])

    const handleCaculateResult = async () =>{
        let questionRequest: any[] = [];
        
        questionRequest = questionLst.map((item,index)=>
            {
                if(item.pickedChoice && item.id){
                    return {
                        question_id: parseInt(item.id),
                        score: item.pickedChoice
                    }
                }
            }
        );


        await AdvisorApi.sendAnswers(testArray).then((data: any)=>{
            console.log(data.data)
            // dispatch(sendAnswersRequest(data.data))
            setSpecializedLst(data.data)
            
            console.log('hihi')

        })

         
       
    }

    useEffect(()=>{
        if(specializedLst!==null && specializedLst!==undefined && specializedLst?.length>0){
            setShowQuestion(false)
            setShowBtnResult(false)
            setIsShowResultCareer(true)
        }
        console.log(specializedLst);
        
    },[specializedLst])
    

    return (
        <div>
        {   showQuestion &&
            <div className='div-career-advisor-question' style={{width:"100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <div style={{margin:'20px',marginTop:'50px', backgroundColor:'white',borderRadius: '20px',marginBottom: '53px'}}>
                    <div>
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
                            </div>

                        
                        

                        {
                            // showBtnResult && 
                            <div style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginBottom: '30px'
                            }}>
                                <MDBBtn
                                    color='warning'
                                    style={{ borderRadius: '20px' }}
                                    onClick={handleCaculateResult}
                                >
                                    Xem kết quả
                                </MDBBtn>
                            </div>
                        }
                        
                </div>
            </div>            
        }
        {
            isShowResultCareer && 
            specializedLst && 
            <CResultsCareer 
                specializedLst= {specializedLst}
            />
        }
        </div>
    )
}

export default CCareerAdvisor