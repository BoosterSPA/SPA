<script setup>
import { useCarousel } from '@/composables/useCarousel';
import headerComponent from './headerComponent.vue';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
// const chiens = [
//     {
//         name: "Chien",
//         age: 13,
//         race: "Croisé Labrador",
//         img: "https://www.ecole-du-chien.fr/wp-content/uploads/2018/03/1-6-495x400.jpg"
//     },
//     {
//         name: "Chien",
//         age: 13,
//         race: "Croisé Labrador",
//         img: "https://www.wanimo.com/veterinaire/wp-content/uploads/2011/04/images_articles_chien_bouvier-assis@2x.jpg"
//     },
//     {
//         name: "Chien",
//         age: 13,
//         race: "Croisé Labrador",
//         img: "https://img.20mn.fr/o9Jjsp84Q5mip-tYhNLD7yk/1444x920_berger-malinois-illustration"
//     },
//     {
//         name: "Chien",
//         age: 13,
//         race: "Croisé Labrador",
//         img: "https://www.ecole-du-chien.fr/wp-content/uploads/2016/10/image_chien_de_race_golden-retriever-1-1-1030x659-1.jpg"
//     },
//     {
//         name: "Chien",
//         age: 13,
//         race: "Croisé Labrador",
//         img: "https://www.vetbotanic.com/wp-content/uploads/2023/12/conseils-poil-chien-scaled.jpg"
//     }

// ]
const {carousel} = useCarousel()
</script>

<template>
    <headerComponent />
    <!-- <div class="carousel">

        <h2>Nos animaux mis en avant</h2>
        <vueper-slides class="no-shadow" autoplay fixed-height ="300px" :breakpoints="{ 800: { visibleSlides: 1, touchable}, 1200: { visibleSlides: 2 } }" arrows-outside
            slide-image-inside :touchable ="false" :bullets="false"  :infinite="true" :visibleSlides=3 :gap = "3">

            <vueper-slide v-for="chien in chiens" :key="chien.name" class="slide" >
                <template #content>
                    <img :src="chien.img" alt="">
                    <div class="pos">
                        <h3>{{ chien.name }}</h3>
                        <p>Race : {{ chien.race }}</p>
                        <p>Age : {{ chien.age }}</p>
                    </div>
                </template>
            </vueper-slide>
        </vueper-slides>
    </div> -->
    <div class="carousel">

<h2>Nos animaux du moment</h2>
<vueper-slides class="no-shadow" autoplay fixed-height ="300px" :breakpoints="{ 800: { visibleSlides: 1, touchable}, 1200: { visibleSlides: 2 } }" arrows-outside
    slide-image-inside :touchable ="false" :bullets="false"  :infinite="true" :visibleSlides=3 :gap = "3">

    <vueper-slide v-for="chien in carousel" :key="chien.name" class="slide" >
        <template #content>
            <img :src="chien.img" alt="">
            <div class="pos">
                <h3>{{ chien.name }}</h3>
                <p>Race : {{ chien.race }}</p>
                <p>Age : {{ chien.age }}</p>
            </div>
        </template>
    </vueper-slide>
</vueper-slides>
</div>
</template>

<style scoped>
.carousel {
    width: 80%;
    
    margin: 0 auto;
}
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}
@media screen and (width < 1200px) {
    img{
        object-fit: contain;
    }
}
.pos {
    display: none;
    position: relative;
    bottom: 100%;
    text-align: center;
}
img:hover {
    opacity: 0.4;
    transition: 0.5s ;

}
.pos:hover + img {
    opacity: 0;
}
img:hover + .pos, .pos:hover {
    display: block;
    
}

.ex--center-mode {
    width: 30vw;
    aspect-ratio: 1/1;
    margin: auto;
}

.vueperslides__arrows {
    color: #FF7d29;
}

</style>
