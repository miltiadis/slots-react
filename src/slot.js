import React from "react";
import myArray from "./store";

import {ReactComponent as NewIcon} from './svg/ico_new-badge.svg';
import {ReactComponent as HighLimitIcon} from './svg/ico_high limit-badge.svg';

const generateRowTiles = (data, limit, maxLimit) => {

    let transformArray = []
    let i, j, chunk = 11;
    for (i = 0, j = data.length; i < j; i += chunk) {
        transformArray.push(data.slice(i, i + chunk));
    }

    const arr = [];
    transformArray.forEach(splitData => {
        // eslint-disable-next-line array-callback-return
        splitData.some((item, index) => {
            if (index === 0) {
                arr.push([])
            }
            //if max limit is reached break away from the iteration
            if (maxLimit === index) {
                return true
            }

            const arrIndex = arr.length - 1;
            arr[arrIndex].push(item);
        })
    })
    return arr;
}

const TilesImage = (props) => {
    return (<>
            {props.data.new && <NewIcon className="c-slot__badge c-slot__badge--new"/>}
            {props.data.highLimit && <HighLimitIcon className="c-slot__badge c-slot__badge--high-limit"/>}
            <img tabIndex="0" src={props.data.imageProperties.path} alt={props.data.imageProperties.name}/>
        </>
    )
}


const BuildSlot = (data) => {
    return (
        <>
            {data.map((slot, index) => (
                <div key={index} className={`c-slot__item ${slot.size === 'big' ? 'c-slot__item--large' : ''}`}>
                    <TilesImage data={slot}/>
                </div>
            ))}
        </>
    )
}

const Slot = (props) => {

    const items = generateRowTiles(myArray, 4, props.totalSlots)

    const filteredSlotItems = () => {
        if (props.filter === 'TOP') {
            return items.map(item => {
                if (props.search) {
                    // return searchSlotItems(items)
                    let newItem = item.filter(status => {
                        return status.highLimit === true
                    })

                    return BuildSlot(newItem.filter(status => {
                        return status.imageProperties.name.toLowerCase().includes(props.search.toLowerCase())

                    }))

                }
                return BuildSlot(item.filter(status => {
                    return status.highLimit === true
                }))
            })

        } else if (props.filter === "NEW") {

            return items.map(item => {
                if (props.search) {
                    // return searchSlotItems(items)
                    let newItem = item.filter(status => {
                        return status.new === true
                    })

                    return BuildSlot(newItem.filter(status => {
                        return status.imageProperties.name.toLowerCase().includes(props.search.toLowerCase())

                    }))

                }

                return BuildSlot(item.filter(status => {

                    return status.new === true
                }))
            })
        } else {
            // entry rendering
            if (props.search) {
                return searchSlotItems(items)
            }
            return items.map(item => {
                return BuildSlot(item)
            })
        }
    }

    const searchSlotItems = (data) => {
        return data.map(item => {
            return BuildSlot(item.filter(status => {
                return status.imageProperties.name.toLowerCase().includes(props.search.toLowerCase())
            }))
        })
    }

    return (
        <>
            <div className="c-slot">
                <h1 className="c-slot__title">Slots</h1>
                {filteredSlotItems()}
            </div>
        </>
    )
}

export default Slot;