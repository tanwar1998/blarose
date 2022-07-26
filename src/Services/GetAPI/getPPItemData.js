import axios from 'axios';
import { axiosConfigReturn } from '../../Services/basicApi';
import { updateStore, updateLoader } from '../../Store/cacheAction';
import { handelErrorResponse } from '../helper';

const getPPItemData = (data, update = false) => {
    return function (dispatch) {
        if (!data.cacheData.data.ppItemData.isAlreadyCalled || update) {
            dispatch(updateLoader(true));
            const config = axiosConfigReturn('home/ppItem', 'get');
            axios(config).then((response) => {
                dispatch(updateLoader(false));
                if (response?.data?.type === 'success') {
                    const tmpData = response.data.data.result;
                    const returnObj = {};
                    tmpData?.forEach((ele) => {
                        let tmpObj = returnObj[ele.locationId] || { text: ele.PPLocations[0].text, localAddress: []}
                        tmpObj.localAddress.push({text: ele.text})
                        returnObj[ele.locationId] = tmpObj;
                    });

                    const storeData = {
                        key: 'ppItemData',
                        value: {
                            data: returnObj || {},
                            isAlreadyCalled: true
                        }
                    }
                    dispatch(updateStore(storeData));
                }
            }, (err) => {
                handelErrorResponse(err, dispatch)
            });
        };
    }
};

export default getPPItemData;