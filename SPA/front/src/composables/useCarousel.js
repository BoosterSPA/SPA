import axios from "axios";
import { onMounted, ref } from "vue";

export function useCarousel(req) {
    const API = "http://localhost:3000/" + req
    let carousel = ref(null)

    async function load() {
        try {
            const res = await axios.get(API)
            carousel.value= res.data
        } catch (error) {
            console.log(error)
        }
    }
onMounted( () => {
    load()
})
return {carousel,load}
}