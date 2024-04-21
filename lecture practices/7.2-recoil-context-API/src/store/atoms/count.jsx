import {atom, selector} from "recoil";

export const countAtom = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
});

export const isEvenSelector = selector({
    key : "isEvenSelector",
    get : ({get}) =>{
        const count = get(countAtom);
        console.log(count);
        return count % 2 == 0;
    }
})
