// /* eslint-disable @typescript-eslint/no-non-null-assertion */
// import React from "react";
// import clsx from "clsx";
// import { createStyles, ThemeDefine, useStyleTheme } from "../theme/Theme";

// type SizeLoading = 'default' | 'small' | 'large';
// interface PropsLoading extends Props {
//     size?: SizeLoading;
//     speed?: number;
//     noOpacityBackground?: boolean,
//     visible?: boolean;
//     fullScreen?: boolean;
// }

// const sizeElementLoading: Record<SizeLoading, string> = {
//     default: '14px',
//     small: '12px',
//     large: '16px'
// };

// const rootStyles = createStyles((theme: ThemeDefine) => ({
//     loading: {
//         zIndex: theme.zIndex.loading,
//         backgroundColor: (props: PropsLoading) => props.noOpacityBackground ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, .8)',
//         '& > div': {
//             width: (props: PropsLoading) => sizeElementLoading[props.size!],
//             height: (props: PropsLoading) => sizeElementLoading[props.size!],
//             borderRadius: '100%',
//             display: 'inline-block',
//             backgroundColor: theme.palette.primary,
//             animationFillMode: 'both',
//             animationName: '$bouncedelay',
//             animationDuration: (props: PropsLoading) => `${props.speed}s`,
//             animationTimingFunction: 'ease-in-out',
//             animationIterationCount: 'infinite',
//             margin: [0, 4]
//         }
//     },
//     '@keyframes bouncedelay': {
//         '0%, 80%, 100%': {
//             transform: 'scale(0)'
//         },
//         '40%': {
//             transform: 'scale(1)'
//         }
//     },
//     animationDelay1: {
//         animationDelay: '-0.48s'
//     },
//     animationDelay2: {
//         animationDelay: '-0.32s'
//     },
//     animationDelay3: {
//         animationDelay: '-0.16s'
//     },
//     full: {
//         width: '100vw',
//         height: '100vh'
//     }
// }));

// const LoadingComponent = (proploading: PropsLoading): JSX.Element | null => {
//     const {size = 'default', 
//         speed = 1.4, 
//         noOpacityBackground = false,
//         visible = false,
//         fullScreen = false,
//         children, ...props} = proploading
//     const classes = useStyleTheme(rootStyles, {size, speed, noOpacityBackground});

//     if (!children && !visible) {
//         return null;
//     }
//     return (
//         <div 
//             {...props}
//             className={clsx(
//                 'relative w-full h-full',
//                 props.className,
//                 {
//                     [classes.full]: fullScreen === true
//                 }
//             )}>
//             {children}
//             {
//                 visible &&
//                 <div className={`${classes.loading} 
//                 absolute inset-0 m-auto flex flex-row justify-center items-center
//                 text-center pointer-events-auto`}>
//                     <div className={classes.animationDelay1}></div>
//                     <div className={classes.animationDelay2}></div>
//                     <div className={classes.animationDelay3}></div>
//                 </div>
//             }
//         </div>
//     )
// }

// const CLoading = React.memo(LoadingComponent);
// export default CLoading;

import React from 'react'

const CLoading = () => {
  return (
    <div>CLoading</div>
  )
}

export default CLoading