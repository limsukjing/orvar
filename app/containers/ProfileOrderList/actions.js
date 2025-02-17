/*
 *
 * ProfileOrderList actions
 *
 */

import {
    GET_ORDER_LIST,
    GET_ORDER_LIST_SUCCESS,
    GET_ORDER_LIST_FAILED,
} from './constants';

export function getOrderList(orderCount) {
    return {
        type: GET_ORDER_LIST,
        orderCount,
    };
}

export function getOrderListSuccess(response) {
    return {
        type: GET_ORDER_LIST_SUCCESS,
        data: response.data,
    };
}

export function getOrderListFailed(response) {
    return {
        type: GET_ORDER_LIST_FAILED,
        data: response.data,
    };
}
