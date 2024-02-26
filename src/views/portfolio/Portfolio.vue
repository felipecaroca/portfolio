<template>
    <layout-base id="portfolio">
        <h1>Portafolio</h1>

        <v-row align="center">
            <v-col cols="3"  align="center">
                Metrónomo Visual
                <a href="https://metronomovisual.felipecaroca.com"
                   target="_blank"
                >
                <v-img :src="metronome" width="500" />
                </a>
            </v-col>
            <v-col cols="3" align="center">
                Score
                <a href="https://score.felipecaroca.com"
                   target="_blank"
                >
                    <v-img :src="scoreLogo" width="500" />
                </a>
            </v-col>
            <v-col cols="3" align="center">
                Pronto más demos
            </v-col>
        </v-row>
    </layout-base>
</template>

<script>
    import metronome from '../../assets/metronome.png'
    import scoreLogo from '../../assets/logo_score.png'
    export default {
        name: 'PortfolioComponent',
        data:()=>({
            metronome,
            scoreLogo
        })
    }
</script>
