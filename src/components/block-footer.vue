<template>
    <footer class="main-footer bg-primary">
        <div class="container py-2">
            <ul class="list-unstyled footer-links">
                <li><a  target="_blank" :href="this.getLang === 'en' ? 
                        'https://ellanse.com/terms-conditions/' : 
                        'https://ellanse.com/ko/terms-conditions/'">{{ this.getLang === 'en' ? 'Terms & Conditions' : '약관 및 조건'}}</a></li>
                <li><span class="ft-bold">© Ellansé® 2019</span></li>
            </ul>
            <div class="footer-logo-holder">
                <router-link tag="a" to="/">
                    <ellanse-logo></ellanse-logo>
                </router-link>
            </div>
        </div>
    </footer>
</template>