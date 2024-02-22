<template>
    <div>
        <h2 class="pt-24 pb-24 text-center">Comment ça marche ?</h2>
        <div class="layout-maxed pt-36" >
            <div id="text" class="grid grid-cols-1 justify-center">
                <p>
                    Sur Tipeee, chaque créateur peut lancer sa page de soutien, peu importe ses besoins, ce qu’il fait ou
                    d’où il vient.
                </p>
                <p>
                    Sa communauté peut le soutenir financièrement en lui envoyant un Tip du montant de son choix, de façon
                    ponctuelle ou récurrente (sans durée d’engagement).
                </p>
                <p>
                    Ce soutien est volontaire : il permet d’aider un créateur à développer son activité et de lui dire qu'on
                    aime son travail. S’il le souhaite, le créateur peut proposer différentes contreparties pour ses
                    tipeurs.
                </p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    layout: 'DefaultLayout'
}
</script>

<style scoped>
h2 {
    background-image: linear-gradient(-145deg, #d54757, #e9595b);
    color: white;
}

#text {
    background-color: #fff;
    box-shadow: 0 0 51px rgba(0, 0, 0, .1);
    border-radius: 10px;
    margin-bottom: 30px;
    width: 100%;
    padding: 20px;
}
</style>