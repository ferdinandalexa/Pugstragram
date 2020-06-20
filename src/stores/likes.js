import {writable} from 'svelte/store';

let likesCount = writable(0);

export default likesCount;