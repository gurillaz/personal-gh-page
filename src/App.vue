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
            <v-app-bar color="transparent" flat absolute class="d-sm-none">
                <!-- <v-toolbar-title>&lt; Klevis &#62;</v-toolbar-title> -->
                <!-- <v-app-bar-nav-icon color="green" class="d-sm-none"></v-app-bar-nav-icon> -->

                
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

                <!-- <v-spacer></v-spacer> -->
            </v-app-bar>

            <v-container class="d-flex align-content-center" fluid id="home">
                <v-row align="center" justify="center">
                    <v-col cols="auto">
                        <h1
                            id="home_header"
                            class="white--text"
                            data-aos="fade-down"
                            data-aos-delay="400"
                        >Hi, I'm Klevis</h1>
                        <p
                            data-aos="fade-down"
                            data-aos-delay="500"
                            class="green--text text-uppercase font-weight-bold"
                        >Obsessed with writing clean, performant code. Passionate about building things people use.</p>
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
                        >
                            &lt;
                            <span class="white--text headline">Skills</span> &#62;
                        </p>
                        <p
                            class="blue--text caption pb-0 mb-0"
                            data-aos="fade-right"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="400"
                        >Languages & Design Patterns:</p>
                        <p
                            class="white--text"
                            data-aos="fade-in"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="450"
                        >PHP, JavaScript, HTML 5, CSS 3, Java, C#, MVC, RESTful API</p>

                        <p
                            class="blue--text caption pb-0 mb-0"
                            data-aos="fade-right"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="500"
                        >Framworks & Libraries:</p>
                        <p
                            class="white--text"
                            data-aos="fade-in"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="550"
                        >Laravel, Vue JS, Vuetify, Bootstrap, jQuery, Moment JS, Vuex, Vue Router</p>

                        <p
                            class="blue--text caption pb-0 mb-0"
                            data-aos="fade-right"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="600"
                        >Tools:</p>
                        <p
                            class="white--text"
                            data-aos="fade-in"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="650"
                        >GIT (GitHub, Bitbucket), JetBrains, VS Code, Artisan(Laravel) CLI, Npm JS, Photoshop, MS Office</p>
                    </v-col>
                    <v-col cols="auto" xs="10" sm="10" md="10" lg="5" xl="5">
                        <p
                            class="red--text"
                            data-aos="fade-left"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="200"
                        >
                            &lt;
                            <span class="white--text headline">Experience</span> &#62;
                        </p>
                        <p
                            class="blue--text caption pb-0 mb-0"
                            data-aos="fade-left"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="400"
                        >Software Development:</p>
                        <p
                            class="white--text"
                            data-aos="fade-in"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="450"
                        >2+ years Front-End Developer as a freelancer and many personal projects.</p>
                        <p
                            class="white--text"
                            data-aos="fade-in"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="500"
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
                        >Currently working as PHP/Laravel developer at ATIS Kosova.</p>

                        <p
                            class="blue--text caption pb-0 mb-0"
                            data-aos="fade-left"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="600"
                        >Non Software Development:</p>
                        <p
                            class="white--text"
                            data-aos="fade-in"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="650"
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
                        >
                            &lt;
                            <span class="white--text headline">Education</span> &#62;
                        </p>
                        <p
                            class="blue--text caption pb-0 mb-0"
                            data-aos="fade-right"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="400"
                        >University:</p>
                        <p
                            class="white--text"
                            data-aos="fade-in"
                            data-aos-anchor="#skills_experience"
                            data-aos-delay="450"
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
                        >
                            &lt;
                            <span class="white--text headline">CONTACT ME</span> &#62;
                        </p>
                        <p
                            class="white--text"
                            data-aos="fade-in"
                            data-aos-anchor="#contact"
                            data-aos-delay="450"
                        >Feel free to contact me if you have any interesting work/project that you need help with or just want to get in touch.</p>
                        <p
                            class="white--text"
                            data-aos="fade-in"
                            data-aos-anchor="#contact"
                            data-aos-delay="700"
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
        skills: ["HTML", "CSS", "JavaScript", "JavaScript"]
    })
};
</script>
    <style lang="css">
#home {
    background-color: #121212;
    background-image: url("assets/home_background.jpg");
    background-blend-mode: darken;
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
</style>
