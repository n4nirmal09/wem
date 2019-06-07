<template>
    <footer class="main-footer bg-primary">
        <div class="container py-2">
            <ul class="list-unstyled footer-links">
                <li><a  target="_blank" class="ft-normal" :href="this.getLang === 'en' ? 
                        'https://ellanse.com/privacy-policy/' : 
                        'https://ellanse.com/ko/privacy-policy/'">{{ this.getLang === 'en' ? 'Terms & Conditions' : '약관 및 조건'}}</a></li>
                <li><span>W410.01 June 2019  |  © Ellansé® 2019</span></li>
            </ul>
            <div class="footer-logo-holder">
                <a target="_blank" :href=" this.getLang === 'en' ? 'https://ellanse.com/' : 'https://ellanse.com/kor/'">
                    <ellanse-logo></ellanse-logo>
                </a>
            </div>
        </div>
    </footer>
</template>