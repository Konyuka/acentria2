<template>
  <div>
    <section class="py-3 relative overflow-hidden bg-cover bg-center bg-no-repeat">
      <div class="container px-4">
        <div class="absolute left-0 top-0 h-full w-full origin-top-left overflow-hidden lg:-top-20 lg:-skew-y-6"
          style="background-color: #f6f6fb;">
        </div>
        <h2
          class="font-sans text-3xl lg:text-4xl text-black font-bold leading-tight lg:leading-tight relative z-10 pb-1 text-center lg:pb-2">
          <span>Transform
          </span><span>today’s
          </span><span>risks
          </span><span>into
          </span><span>tomorrow’s
          </span><span>opportunities
          </span><span>with
          </span>
          <br>
          <!-- <span>the </span> -->
          <span class="text-brand-primary">Acentria
          </span>
          <span class="text-brand-primary">Group
          </span><span> </span>
        </h2>
        <div class="relative grid grid-cols-1 items-center gap-4 lg:grid-cols-1 lg:gap-2">

          <section class="testimonials-one mb-2">
            <div class="container">
              <div class="row">
                <div class="col-xl-6">
                  <div class="testimonials-one__thumb-carousel-wrap">
                    <div class="testimonials-one__icon">
                      <div class="testimonials-one__icon-inner">
                        <i class="fas fa-business-time !text-brand-primary !text-7xl"></i>
                      </div>
                    </div>
                    <div class="testimonials-one__thumb-carousel">
                      <div class="swiper-wrapper swiper">
                        <swiper :options="swiperOptions">
                          <swiper-slide>
                            <div class="swiper-slide">
                              <div class="testimonials-one__image">
                                <NuxtImg format="webp" 
                                  src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                  alt="Awesome Image" />
                              </div>
                            </div>
                          </swiper-slide>
                          <swiper-slide>
                            <div class="swiper-slide">
                              <div class="testimonials-one__image">
                                <NuxtImg format="webp" 
                                  src="https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                  alt="Awesome Image" />
                              </div>
                            </div>
                          </swiper-slide>
                          <swiper-slide>
                            <div class="swiper-slide">
                              <div class="testimonials-one__image">
                                <NuxtImg format="webp" 
                                  src="https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                  alt="Awesome Image" />
                              </div>
                            </div>
                          </swiper-slide>
                          <swiper-slide>
                            <div class="swiper-slide">
                              <div class="testimonials-one__image">
                                <NuxtImg format="webp" 
                                  src="https://images.unsplash.com/photo-1520442027413-7bf6c51517da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                  alt="Awesome Image" />
                              </div>
                            </div>
                          </swiper-slide>
                          <swiper-slide>
                            <div class="swiper-slide">
                              <div class="testimonials-one__image">
                                <NuxtImg format="webp" 
                                  src="https://images.pexels.com/photos/1105379/pexels-photo-1105379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                  alt="Awesome Image" />
                              </div>
                            </div>
                          </swiper-slide>
                        </swiper>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-6 d-flex">
                  <div class="my-auto">

                    <div class="testimonials-one__carousel">
                      <div class="swiper-wrapper">
                        <swiper :options="swiperOptions">
                          <swiper-slide>
                            <div class="swiper-slide bg-gray-300 p-4 rounded-xl shadow-2xl">
                              <div class="testimonials-one__single">
                                <h3 class="!font-semibold !text-2xl !font-sans !text-brand-primary">
                                  Reinsurance Broking
                                </h3>
                                <p class="text-md font-sans mt-3 text-black">
                                  At Acentria Group, we provide expert reinsurance
                                  broking services tailored to meet the diverse needs of
                                  our clients. Our team of seasoned professionals works
                                  closely with insurance companies to design and
                                  implement reinsurance programs that enhance their
                                  financial stability and optimize risk management. We
                                  leverage our extensive market knowledge and strong
                                  relationships with top reinsurers to secure the best
                                  terms and coverage.
                                </p>
                              </div>
                            </div>
                          </swiper-slide>

                          <swiper-slide>
                            <div class="swiper-slide bg-gray-300 p-4 rounded-xl shadow-2xl">
                              <div class="testimonials-one__single">
                                <h3 class="!font-semibold !text-2xl !font-sans !text-brand-primary">
                                  Insurance Broking
                                </h3>
                                <p class="text-md font-sans mt-3 text-black">
                                  Our comprehensive insurance broking services are
                                  designed to protect your assets and mitigate risks.
                                  Whether you are an individual or a business, Acentria
                                  Group offers customized insurance solutions that
                                  provide peace of mind and financial security. Our
                                  dedicated brokers conduct thorough risk assessments
                                  and offer advice on the most suitable insurance
                                  products available in the market.
                                </p>
                              </div>
                            </div>
                          </swiper-slide>

                          <swiper-slide>
                            <div class="swiper-slide bg-gray-300 p-4 rounded-xl shadow-2xl">
                              <div class="testimonials-one__single">
                                <h3 class="!font-semibold !text-2xl !font-sans !text-brand-primary">
                                  Actuarial & Financial Services
                                </h3>
                                <p class="text-md font-sans mt-3 text-black">
                                  Acentria Group's actuarial and financial services are
                                  at the forefront of the industry, providing critical
                                  insights and solutions that drive informed
                                  decision-making. Our actuaries utilize advanced
                                  modeling techniques to analyze financial risks and
                                  develop strategies for managing them effectively. We
                                  offer a range of services including pension
                                  consulting, financial forecasting, and solvency
                                  assessments, ensuring that our clients are
                                  well-prepared for the future.
                                </p>
                              </div>
                            </div>
                          </swiper-slide>

                          <swiper-slide>
                            <div class="swiper-slide bg-gray-300 p-4 rounded-xl shadow-2xl">
                              <div class="testimonials-one__single">
                                <h3 class="!font-semibold !text-2xl !font-sans !text-brand-primary">
                                  Aviation Insurance
                                </h3>
                                <p class="text-md font-sans mt-3 text-black">
                                  Navigating the complexities of aviation insurance
                                  requires specialized knowledge and experience.
                                  Acentria Group is proud to offer comprehensive
                                  aviation insurance solutions that cover everything
                                  from aircraft hull and liability to pilot and crew
                                  coverage. Our team understands the unique risks
                                  associated with the aviation industry and is committed
                                  to providing tailored insurance products that meet the
                                  highest standards of safety and compliance.
                                </p>
                              </div>
                            </div>
                          </swiper-slide>

                          <swiper-slide>
                            <div class="swiper-slide bg-gray-300 p-4 rounded-xl shadow-2xl">
                              <div class="testimonials-one__single">
                                <h3 class="!font-semibold !text-2xl !font-sans !text-brand-primary">
                                  Innovative Tech Solutions
                                </h3>
                                <p class="text-md font-sans mt-3 text-black">
                                  In an increasingly digital world, Acentria Group
                                  offers innovative IT software products designed to
                                  streamline operations and enhance efficiency. Our
                                  software solutions cater to the specific needs of the
                                  financial and insurance sectors, offering tools for
                                  data analysis, risk management, and client
                                  relationship management. By integrating cutting-edge
                                  technology, we help our clients stay ahead of the
                                  curve and achieve their business goals.
                                </p>
                              </div>
                            </div>
                          </swiper-slide>
                        </swiper>
                      </div>

                      <div class="testimonials-one__pagination-wrap">
                        <div class="swiper-pagination"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";
import 'swiper/swiper-bundle.css';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation, Autoplay } from 'swiper'


export default {
  name: "Testimonial",
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    // swiper: directive,
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        loop: true,
        speed: 1000,
        spaceBetween: 30,
        navigation: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      },
    };
  },
};
</script>

<style scoped>
@import '~/assets/css/apiton/animate.min.css';
@import '~/assets/css/apiton/apton-icons.css';
@import '~/assets/css/apiton/bootstrap.min.css';
@import '~/assets/css/apiton/responsive.css';
@import '~/assets/css/apiton/style.css';
@import '~/assets/css/apiton/swiper.min.css';
</style>
