
const SYSTEM_CONSTANTS = {
    API: {
        LISTHOTEL: {
            DEPARTMENT: 'api/Employee/me',
            HOTEL: 'api/OperationCenter/me'
        },
        IDENTITY: {
            CONNECT_TOKEN: 'identity/clients/publicKey',
            LOGIN: "users/login",
            FORGOT: "license_manager/users",
            REGISTER: "users/register"
        },
        MEETINGS: {
            CREATE_MEETINGS: 'meeting',
            FILTER_MEETINGS: 'meeting/multiMember',
            UPDATE_MEETINGS: 'meeting/{meetingId}',
            DELETE_MEETINGS: 'meeting/{meetingId}',
            GET_MEETING_BY_ID: 'meeting/{meetingId}',
        },
        MEMBER: {
            GET_ALL: 'member/getAll',
            GET_ALL_WITH_ROLE: 'member/getAllWithRole',
            CREATE_MEMBER: 'member'
        },
        ROLE: {
            GET_ALL: 'role/getAll'
        },
        TASK: {
            GET_ALL: 'task/getAll',
            CREATE_TASK: 'task'
        },
        MAIL_SERVICE: {
            MEETING_INVITATION: 'meetingInvitation'
        },
        ADVISOR:{
            SEND_ANSWERS: 'question',
            SEND_CAREER_ADVISOR: 'sendCareerAdvisor',
        },
        SPECIALIZED: {
            GET_ALL: 'specialized/getAll',
            GET_MEETING_BY_ID: 'specialized/{specializedId}'
        },
        SPECIALIZED_OF_SCHOOL: {
            GET_ALL: 'specializedOfSchool/getAll',
            GET_SPECIALIZED_OF_SCHOOL_BY_ID: 'specializedOfSchool/{specializedOfSchoolId}'
        },

    },
    IMAGE: {
        IMAGE_HOTEL: "dms/Document/file"
    }
}

export default SYSTEM_CONSTANTS