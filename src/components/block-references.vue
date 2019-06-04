<template>
    <section v-reveal="{animation:'fade-in'}">
        <div class="container py-4">
            <div class="text-center"><span @click="showReferals = !showReferals" class="btn btn-dark text-primary">References</span></div>
            <transition name="fade">
                <div class="pt-3 references-wrapper" v-if="showReferals">
                    <ul class="list-unstyled mb-0">
                        <li>
                            <p class="small mb-2">
                                + Ellansé (S, M, L and E) is intended to be used for subdermal implantation in the face.
                            </p>
                        </li>
                        <li>
                            <p class="small mb-2">
                                * Expected longevity in-vivo based on extrapolation of clinical data from –S and –M accepted PCL degradation behaviour.
                            </p>
                        </li>
                        <li>
                            <p class="small mb-2">
                                ** Sinclair, data on file, Nov. 2018
                            </p>
                        </li>
                    </ul>
                </div>
            </transition>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            showReferals: false
        }
    }
}
</script>