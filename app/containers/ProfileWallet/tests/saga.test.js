/**
 * Test  sagas
 */

/* eslint-disable redux-saga/yield-effects */
// import { take, call, put, select } from 'redux-saga/effects';
// import { profileWalletSaga } from '../saga';
import profileWalletSaga, { voucherDataWorker } from '../saga';

// const generator = profileWalletSaga();

describe('profileWalletSaga', () => {
    it('Expect to have unit tests specified', () => {
        const generator = profileWalletSaga();
        expect(generator.next(voucherDataWorker()).FORK).toEqual(undefined);
    });
});
