/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { notification } from 'antd';
import type { NotificationPlacement } from 'antd/lib/notification';
import React from 'react';

export enum NotificationType {
    Warning,
    Error,
    Info
}

const openNotification = (notificationType: NotificationType, placement: NotificationPlacement, message: string, description: string, onCloseWarning?: any) => {
    // const [closeNotification, setCloseNotification] = useState<boolean>(true);
    switch (notificationType) {
        case NotificationType.Warning:
            notification.warning({
                message: `${message}`,
                description:
                    `${description}`,
                placement,
                onClose: onCloseWarning
            });
            break;
        case NotificationType.Error:
            notification.error({
                message: `${message}`,
                description:
                    `${description}`,
                placement,
                onClose: onCloseWarning
            });
            break;
        case NotificationType.Info:
            notification.info({
                message: `${message}`,
                description:
                    `${description}`,
                placement,
                onClose: onCloseWarning
            });
            break;
        default:
            break;
    }

};

export default openNotification;