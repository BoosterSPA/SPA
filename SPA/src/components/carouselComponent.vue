<script setup>
import { useCarousel } from '@/composables/useCarousel';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
const { carousel } = useCarousel()
</script>

<template>

    <div class="carousel">

        <h2>Nos animaux du moment</h2>
        <vueper-slides class="no-shadow" fixed-height="300px"
            :breakpoints="{ 800: { visibleSlides: 1 }, 1200: { visibleSlides: 2 } }" arrows-outside slide-image-inside
            :touchable="false" :bullets="false" :infinite="true" :visibleSlides=3 :gap="3">

            <vueper-slide v-for="animal in carousel" :key="animal.name" class="slide">
                <template #content>

                    <img :src="animal.img" alt="">
                    <div class="pos">
                        <h3>{{ animal.name }}</h3>
                        <p v-if="animal.race">Race : {{ animal.race }}</p>
                        <p>Sexe : {{ animal.sexe }}</p>
                        <p>Age : {{ animal.age }}</p>
                        <div v-if="animal.specie === 'chat'">
                            <p v-if="animal.appartement">Vie en appartement : <strong>Oui</strong></p>
                            <p v-else>Vie en appartement : <strong>Non</strong></p>
                        </div>
                        <button>En savoir plus</button>
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
    img {
        object-fit: contain;
    }
}

.pos {
    position: relative;
    bottom: 100%;
    text-align: center;
    opacity: 0;
    background-color: white;
    padding: 1rem 0;
}

img:hover+.pos,
.pos:hover {
    opacity: 0.9;
    transition: 1s;
}

.ex--center-mode {
    width: 30vw;
    aspect-ratio: 1/1;
    margin: auto;
}

.vueperslides__arrows {
    color: #FF7d29;
}

button {
    background-color: #FF7D29;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

button:hover {
    background-color: #FFBF78;
    transform: scale(1.05);
}

button:active {
    background-color: #FFEEA9;
    transform: scale(0.98);
}
</style>
