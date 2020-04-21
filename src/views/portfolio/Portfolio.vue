<template>
    <layout-base id="portfolio">
        <h1>Portafolio</h1>

        <v-row align="center">
            <v-col cols="3"  align="center">
                <a href="https://metronomovisual.felipecaroca.com"
                   target="_blank"
                >
                <v-img :src="metronome" />
                </a>
                Metrónomo Visual
            </v-col>
            <v-col cols="3" align="center">
                Pronto más demos
            </v-col>
        </v-row>
    </layout-base>
</template>

<script>
    import metronome from '../../assets/metronome.png'
    export default {
        data:()=>({
            metronome
        })
    }
</script>
