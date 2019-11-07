    <template>
    <v-app>
        <v-content>
            <v-app-bar color="transparent" flat fixed class="d-none d-sm-block">
                <!-- <v-toolbar-title>&lt; Klevis &#62;</v-toolbar-title> -->
                <!-- <v-app-bar-nav-icon color="green" class="d-sm-none"></v-app-bar-nav-icon> -->

                <v-spacer></v-spacer>

                <v-toolbar-items >
                    <v-btn
                        text
                        color="green"
                        @click="$vuetify.goTo('#home')"
                        :ripple="false"
                        data-aos="zoom-in-right"
                        data-aos-delay="150"
                    >// Home</v-btn>
                    <v-btn
                        text
                        color="green"
                        @click="$vuetify.goTo('#skills_experience')"
                        :ripple="false"
                        data-aos="zoom-out-down"
                        data-aos-delay="300"
                    >// Skills & Experience</v-btn>
                    <!-- <v-btn
                            text
                            color="green"
                            @click="$vuetify.goTo('#skills_experience')"
                            :ripple="false"
                            data-aos="zoom-out-down"
                            data-aos-delay="450"
                    >// Experience</v-btn>-->
                    <v-btn
                        text
                        color="green"
                        @click="$vuetify.goTo('#contact')"
                        :ripple="false"
                        data-aos="zoom-out-down"
                        data-aos-delay="600"
                    >// Contact me</v-btn>
                    <v-btn
                        text
                        color="green"
                        href="/Rezume e punes Tetor 2019 v1.1.pdf"
                        target="_blank"
                        :ripple="false"
                        data-aos="zoom-out-left"
                        data-aos-delay="900"
                    >
                        // Resume
                        <v-icon right small color="green">mdi-download-outline</v-icon>
                    </v-btn>
                </v-toolbar-items>

                <!-- <v-spacer></v-spacer> -->
            </v-app-bar>
            <!--             <v-app-bar color="transparent" flat absolute class="d-sm-none">

                
                <v-toolbar-items class="d-sm-none">
                    <v-container>
                        <v-row align="center">
                            <v-col cols="auto" sm="10" xs="12">
                                <v-btn
                                    text
                                    color="green"
                                    @click="$vuetify.goTo('#home')"
                                    :ripple="false"
                                    data-aos="zoom-in-right"
                                    data-aos-delay="150"
                                >// Home</v-btn>
                                <v-btn
                                    text
                                    color="green"
                                    @click="$vuetify.goTo('#skills_experience')"
                                    :ripple="false"
                                    data-aos="zoom-out-down"
                                    data-aos-delay="300"
                                >// Skills & Experience</v-btn>
                            </v-col>
                            <v-col cols="auto" sm="10" xs="12">
                                <v-btn
                                    text
                                    color="green"
                                    @click="$vuetify.goTo('#contact')"
                                    :ripple="false"
                                    data-aos="zoom-out-down"
                                    data-aos-delay="600"
                                >// Contact me</v-btn>
                                <v-btn
                                    text
                                    color="green"
                                    href="/Rezume e punes Tetor 2019 v1.1.pdf"
                                    target="_blank"
                                    :ripple="false"
                                    data-aos="zoom-out-left"
                                    data-aos-delay="900"
                                >
                                    // Resume
                                    <v-icon right small color="green">mdi-download-outline</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-toolbar-items>

            </v-app-bar>-->

            <v-container class="d-flex align-content-center" fluid id="home">
                <v-row align="center" justify="center">
                    <v-col cols="auto">
                        <h1
                            id="home_header"
                            class="white--text"
                            data-aos="fade-down"
                            data-aos-delay="400"
                            style="background-color:rgba(18,18,16,0.8)"
                        >Hi, I'm Klevis</h1>
                        <p
                            data-aos="fade-down"
                            data-aos-delay="500"
                            class="green--text text-uppercase font-weight-bold"
                            style="background-color:rgba(18,18,16,0.8)"

                        >Obsessed with writing clean, performant code. Passionate about building things people use.</p>
                    </v-col>
                    <!-- <v-col cols="auto" sm="10" xs="12">

                    </v-col>-->
                    <v-col cols="auto" sm="10" xs="12" class="d-sm-none" style="background-color:rgba(18,18,16,0.8)">
                        <v-btn
                            text
                            color="white"
                            @click="$vuetify.goTo('#skills_experience')"
                            :ripple="false"
                            data-aos="zoom-out-down"
                            data-aos-delay="300"
                            block
                        >// Skills & Experience</v-btn>
                        <v-btn
                            text
                            color="white"
                            @click="$vuetify.goTo('#contact')"
                            :ripple="false"
                            data-aos="zoom-out-down"
                            data-aos-delay="600"
                        >// Contact me</v-btn>
                        <v-btn
                            text
                            color="white"
                            href="/Rezume e punes Tetor 2019 v1.1.pdf"
                            target="_blank"
                            :ripple="false"
                            data-aos="zoom-out-left"
                            data-aos-delay="900"
                        >
                            // Resume
                            <v-icon right small color="white">mdi-download-outline</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
            <v-container fluid id="skills_experience">
                <v-row justify="center" class="pt-12 mt-12">
                    <v-col cols="auto" xs="10" sm="10" md="10" lg="5" xl="5">
                        <p
                            class="red--text"
                            data-aos="fade-right"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="200"
                            data-aos-anchor-placement="center-bottom"
                        >
                            &lt;
                            <span class="white--text headline">Skills</span> &#62;
                        </p>
                        <p
                            class="blue--text caption pb-0 mb-0"
                            data-aos="fade-right"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="400"
                            data-aos-anchor-placement="center-bottom"
                        >Languages & Design Patterns:</p>
                        <p
                            class="white--text"
                            data-aos="fade-in"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="450"
                            data-aos-anchor-placement="center-bottom"
                        >PHP, JavaScript, HTML 5, CSS 3, Java, C#, MVC, RESTful API</p>

                        <p
                            class="blue--text caption pb-0 mb-0"
                            data-aos="fade-right"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="500"
                            data-aos-anchor-placement="center-bottom"
                        >Framworks & Libraries:</p>
                        <p
                            class="white--text"
                            data-aos="fade-in"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="550"
                            data-aos-anchor-placement="center-bottom"
                        >Laravel, Vue JS, Vuetify, Bootstrap, jQuery, Moment JS, Vuex, Vue Router</p>

                        <p
                            class="blue--text caption pb-0 mb-0"
                            data-aos="fade-right"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="600"
                            data-aos-anchor-placement="center-bottom"
                        >Tools:</p>
                        <p
                            class="white--text"
                            data-aos="fade-in"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="650"
                            data-aos-anchor-placement="center-bottom"
                        >GIT (GitHub, Bitbucket), JetBrains, VS Code, Artisan(Laravel) CLI, Npm JS, Photoshop, MS Office</p>
                    </v-col>
                    <v-col cols="auto" xs="10" sm="10" md="10" lg="5" xl="5">
                        <p
                            class="red--text"
                            data-aos="fade-left"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="200"
                            data-aos-anchor-placement="center-bottom"
                        >
                            &lt;
                            <span class="white--text headline">Experience</span> &#62;
                        </p>
                        <p
                            class="blue--text caption pb-0 mb-0"
                            data-aos="fade-left"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="400"
                            data-aos-anchor-placement="center-bottom"
                        >Software Development:</p>
                        <p
                            class="white--text"
                            data-aos="fade-in"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="450"
                            data-aos-anchor-placement="center-bottom"
                        >2+ years Front-End Developer as a freelancer and many personal projects.</p>
                        <p
                            class="white--text"
                            data-aos="fade-in"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="500"
                            data-aos-anchor-placement="center-bottom"
                        >
                            For more check my
                            <a
                                class="green--text"
                                href="https://github.com/gurillaz"
                            >GitHub</a> profile.
                        </p>
                        <p
                            class="white--text"
                            data-aos="fade-in"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="500"
                            data-aos-anchor-placement="center-bottom"
                        >Currently working as PHP/Laravel developer at ATIS Kosova.</p>

                        <p
                            class="blue--text caption pb-0 mb-0"
                            data-aos="fade-left"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="600"
                            data-aos-anchor-placement="center-bottom"
                        >Non Software Development:</p>
                        <p
                            class="white--text"
                            data-aos="fade-in"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="650"
                            data-aos-anchor-placement="center-bottom"
                        >Retail: Department Manager(Operations); Stock Manager(Finances) Viva-Fresh SH.P.K</p>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="auto" xs="10" sm="10" md="10" lg="10" xl="10">
                        <p
                            class="red--text"
                            data-aos="fade-right"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="200"
                            data-aos-anchor-placement="center-bottom"
                        >
                            &lt;
                            <span class="white--text headline">Education</span> &#62;
                        </p>
                        <p
                            class="blue--text caption pb-0 mb-0"
                            data-aos="fade-right"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="400"
                            data-aos-anchor-placement="center-bottom"
                        >University:</p>
                        <p
                            class="white--text"
                            data-aos="fade-in"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="450"
                            data-aos-anchor-placement="center-bottom"
                        >Computer Sciences - Software Design(BSC degree)/ University of Prizren "Ukshin Hoti" Kosovo</p>
                    </v-col>
                </v-row>
            </v-container>

            <v-container class="d-flex align-content-center" fluid id="contact">
                <v-row align="center" justify="center">
                    <!-- <v-col cols="auto" xs="10" sm="10" md="10" lg="2" xl="2">
                        <p
                            class="red--text"
                            data-aos="fade-right"
                            data-aos-anchor="#contact"
                            data-aos-delay="200"
                        >
                            &lt;
                            <span class="white--text headline">CONTACT ME</span> &#62;
                        </p>
                    </v-col>-->
                    <v-col cols="auto" xs="10" sm="10" md="10" lg="7" xl="7">
                        <p
                            class="red--text mb-5"
                            data-aos="fade-right"
                            data-aos-anchor="#contact"
                            data-aos-delay="200"
                            data-aos-anchor-placement="center-bottom"
                        >
                            &lt;
                            <span class="white--text headline">CONTACT ME</span> &#62;
                        </p>
                        <p
                            class="white--text"
                            data-aos="fade-in"
                            data-aos-anchor="#contact"
                            data-aos-delay="450"
                            data-aos-anchor-placement="center-bottom"
                        >Feel free to contact me if you have any interesting work/project that you need help with or just want to get in touch.</p>
                        <p
                            class="white--text"
                            data-aos="fade-in"
                            data-aos-anchor="#contact"
                            data-aos-delay="700"
                            data-aos-anchor-placement="center-bottom"
                        >
                            You can reach me at
                            <a
                                class="green--text"
                                href="mailto:klevissahitaj+ghpage@gmail.com"
                            >klevissahitaj+ghpage@gmail.com</a>
                        </p>

                        <p
                            class="white--text"
                            data-aos="fade-in"
                            data-aos-anchor="#contact"
                            data-aos-delay="800"
                            data-aos-anchor-placement="center-bottom"
                        >
                            Check my
                            <a
                                class="green--text"
                                href="/Rezume e punes Tetor 2019 v1.1.pdf"
                                target="_blank"
                            >resume</a>
                            or my
                            <a
                                class="green--text"
                                href="https://github.com/gurillaz"
                                target="_blank"
                            >GitHub</a> profile.
                        </p>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
        <v-footer absolute class="font-weight-medium" id="footer" dark>
            <v-col class="text-center py-1" cols="12">
                {{ new Date().getFullYear() }}
                <strong>Klevis Sahitaj</strong>
                <v-btn
                    class="pa-0 my-0 px-2 text-capitalize"
                    text
                    color="green"
                    @click.stop="credits_dialog = true"
                >Credits</v-btn>
            </v-col>
        </v-footer>

        <v-dialog v-model="credits_dialog"  overlay-color="black" overlay-opacity="0.9" class="flat" >
            <v-container fluid>
                <v-row justify="center" >
                    <v-col cols="auto" xs="12" sm="12" md="6" lg="6" xl="6">
                        <v-card  tile>
                            <v-card-title class="headline">Credits</v-card-title>
                            <v-card-text>
                                <p>
                                    You can find this site code at
                                    <a
                                        href="https://github.com/gurillaz/personal-gh-page"
                                    >github.com/gurillaz/personal-gh-page</a>
                                </p>
                                <p class="pb-0 mb-0">Build using:</p>
                                <v-list-item two-line class="pl-0">
                                    <v-list-item-content class="pt-0">
                                        <v-list-item-title>VueJS Framework</v-list-item-title>
                                        <v-list-item-subtitle>
                                            <a href="http://www.vuejs.org" target="_blank">vuejs.org</a>
                                        </v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item two-line class="pl-0">
                                    <v-list-item-content>
                                        <v-list-item-title>Vuetify(Vue UI LIbrary)</v-list-item-title>
                                        <v-list-item-subtitle>
                                            <a href="https://vuetifyjs.com" target="_blank">vuetifyjs.com</a>
                                        </v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item two-line class="pl-0">
                                    <v-list-item-content>
                                        <v-list-item-title>AOS(Animations Library) by michalsnik</v-list-item-title>
                                        <v-list-item-subtitle>
                                            <a href="https://github.com/michalsnik/aos" target="_blank" >github.com/michalsnik/aos</a>
                                        </v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item two-line class="pl-0">
                                    <v-list-item-content>
                                        <v-list-item-title>Background Image by Adrien Olichon</v-list-item-title>
                                        <v-list-item-subtitle>
                                            <a href="https://unsplash.com/@adrienolichon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                                                target="_blank"
                                            >unsplash.com/@adrienolichon</a>
                                        </v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <p class="font-weight-bold mt-5 pb-0">NOTICE: All personal and other data might be outdated. Last update: November 2019.</p>

                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="green darken-1"
                                    text
                                    @click="credits_dialog = false"
                                >Close</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-dialog>
    </v-app>
</template>

    <script>
// import HelloWorld from './components/HelloWorld';

export default {
    name: "App",
    components: {
        // HelloWorld,
    },
    data: () => ({
        credits_dialog: false
    })
};
</script>
    <style lang="css">
#home {
    background-color: #121212;
    background-image: url("assets/home_background.jpg");
    background-blend-mode: color-dodge;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
#home_header {
    /* font-family: 'Lora', serif; */
    font-size: 5rem;
}

#home,
#skills_experience {
    min-height: 100vh;

    font-family: "Roboto Mono", monospace;
    background-color: #121212;
}

#contact {
    min-height: 100vh;

    font-family: "Roboto Mono", monospace;
    background-color: rgba(0, 0, 0, 0.98);
}
#footer {
    min-height: 5vh;

    font-family: "Roboto Mono", monospace;
    background-color: rgba(0, 0, 0, 0.98);
}

</style>
