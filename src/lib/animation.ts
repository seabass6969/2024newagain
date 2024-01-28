import { elasticIn, elasticOut } from "svelte/easing"

export function minimiseImage(node: HTMLElement, {duration}){
    return {duration, css: (t) => {
        const eased = elasticOut(t);
        return `transform: scale(${t}); `
    }}
}
export function maximiseImage(node: HTMLElement, {duration}){
    return {duration, css: (t) => {
        const eased = elasticIn(t);
        return `transform: scale(${t}); `
    }}
}