import * as actionTypes from './actionTypes';

export const FollowInfoShow = () => ({
    type: actionTypes.FOLLOW_INFO_SHOW
});

export const FollowInfoHide = () => ({
    type: actionTypes.FOLLOW_INFO_HIDE
});

export const MouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
});

export const MouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
});

export const userFollowedShow = () => ({
    type: actionTypes.USER_FOLLOWED_SHOW
});

export const userFollowedHide = () => ({
    type: actionTypes.USER_FOLLOWED_HIDE
});

export const MouseEnterUser = () => ({
    type: actionTypes.MOUSE_ENTER_USER
});

export const MouseLeaveUser = () => ({
    type: actionTypes.MOUSE_LEAVE_USER
})