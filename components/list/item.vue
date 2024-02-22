<template>
    <article>
        <a :href="`https://tipeee.com/${item.slug}`" class="t-home-slideshow-avatar-container" :title="item.name"
            style="background-image: url(&quot;/img/default_avatar_1.png&quot;);">
            <img :alt="item.name" :title="item.name" src="/img/default_avatar_1.png" class="t-avatar-pic">
            <div class="t-home-slideshow-flag">
                <img src="/img/flag_fr.svg">
            </div>
        </a>
        <h3 class="t-home-slideshow-title"><a :href="`https://tipeee.com/${item.slug}`" class="">{{ item.name }}</a></h3>
        <div class="t-home-slideshow-stats-container">
            <div class="t-home-slideshow-stats">
                <span class="t-home-slideshow-amount">862</span> Tipeurs
            </div>
        </div>
        <div class="t-home-slideshow-item-footer">

            <a :href="`https://tipeee.com/${item.slug}`" class="t-home-slideshow-tip-btn" :title="item.name">tip!</a>
        </div>
    </article>
</template>

<script>
export default {
    props: ['item']
}
</script>

<style scoped>
article:hover {
    cursor: pointer;

    border: solid #d64758 0.1px;
    transition: 0.3s ease-in-out;

    .t-home-slideshow-title {
        color: #d64758;
    }

    .t-home-slideshow-flag {
        display: inline;
        transition: 0.5s ease-in-out;
    }

    .t-home-slideshow-title {
        margin-top: -15%;
        z-index: 1;
        font-size: x-large;
        transition: 0.3s ease-in-out;

    }

}

article {
    align-items: center;
    background-color: #fff;
    box-shadow: 0 0 51px rgba(0, 0, 0, .1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 0;
    text-align: center;
    max-width: 250px;

}

.t-home-slideshow-avatar-container {
    background-color: #fff;
    background-size: cover;
    border-radius: 10px 10px 0 0;
    position: relative;
}

.t-home-slideshow-avatar-container img {
    opacity: 0;
}

.t-home-slideshow-title {
    flex: 1;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: -.5px;
    margin-bottom: 15px;
    margin-top: 0;
    transition: 0.2s ease;

}

.t-home-slideshow-title a {
    text-decoration: none;
    color: inherit;
}

.t-home-slideshow-stats-container {
    align-items: center;
    display: flex;
    margin-bottom: 5px;
}

.t-home-slideshow-amount {
    color: #d64758;
    font-size: 1.2rem;
    font-weight: 900;
}

.t-home-slideshow-item-footer {
    align-items: flex-end;
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
}

.t-home-slideshow-flag {
    position: absolute;
    top: 0;
    left: 10px;
    width: 20px;
    height: 20px;
    display: none;

}

.t-home-slideshow-tip-btn {
    background-color: #d64758;
    border-radius: 0 0 10px 10px;
    color: #fff;
    display: block;
    font-size: 1.1rem;
    padding: 0px 13px;
    text-decoration: none;
    width: 100%;
}
</style>
