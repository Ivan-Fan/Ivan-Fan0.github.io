/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/blog/public/2018/07/22/记下美好的瞬间（一）-Ivan-s-blog-诞生/index.html","b94c46f99489b986fb09a4eebffe56c7"],["D:/blog/public/2018/07/25/用hexo-GitHub搭建个人博客指南/index.html","0faca2f01820e02f786647ff9334de6d"],["D:/blog/public/2018/08/15/吴恩达deeplearning学习笔记（一）-logistic回归/index.html","d4d9581569fe224f2c85ccf4f611e76e"],["D:/blog/public/2018/08/15/吴恩达deeplearning学习笔记（一）-logistic回归/sigmoid函数.png","01b0908cc198776965606475213c66a8"],["D:/blog/public/2018/08/18/托福写作-独立写作模板/index.html","0c84f174ffb63cb0d44e6d4285e846ce"],["D:/blog/public/2018/08/18/托福写作-独立写作要点须知-模板/index.html","5b922ad759c4ab1f8b4969b60d198289"],["D:/blog/public/2018/08/18/托福写作-独立写作要点须知-模板/绝对词类文章结构.png","cdc093ecb762eff786ed688e41458547"],["D:/blog/public/2018/08/18/托福口语-Task1语料仓库/index.html","e3f9d5c84b67293c9c98a20560e48502"],["D:/blog/public/2018/08/20/Markdown语法tips/1.png","5bcd224a0a252b78b54ebc9a6a0058a8"],["D:/blog/public/2018/08/20/Markdown语法tips/2.png","463ff2c9409d43d82e0070449425027b"],["D:/blog/public/2018/08/20/Markdown语法tips/3.png","35eeae7bee34db339aa4cd09eb87fd04"],["D:/blog/public/2018/08/20/Markdown语法tips/index.html","66743a4e58ef04a3f78ec5e457bfd1dd"],["D:/blog/public/2018/08/20/Markdown语法tips/u.jpg","c6c2993dbe6957e423148a70ff377775"],["D:/blog/public/2018/08/23/托福写作-综合写作模板/index.html","dc1facc386c1f70a3d20633f99b535f6"],["D:/blog/public/2018/08/23/托福口语-Task3-5模板/index.html","8406b7d98ae3d55579cb62d4a6923b71"],["D:/blog/public/2018/08/23/托福口语-Task3-5模板/introduction.png","1eb2eb6702977d05022e157f6c052fe7"],["D:/blog/public/2018/08/23/托福口语-Task3-5模板/problem.png","b6caf3da23119d85a8a460bfb8523afc"],["D:/blog/public/2018/08/23/托福口语-Task3-5模板/task3.png","414fe360fa7113538abaf0a7061357cd"],["D:/blog/public/2018/08/23/托福口语-Task3-5模板/title.png","f19c4f7817adee5c044b73fca0958524"],["D:/blog/public/2018/08/27/李宏毅MachineLearning学习笔记-CNN/Keras.png","b832584bae9d420c907d91456606d410"],["D:/blog/public/2018/08/27/李宏毅MachineLearning学习笔记-CNN/flatten.png","d3da568ebe70e04608818c8aa9962ef7"],["D:/blog/public/2018/08/27/李宏毅MachineLearning学习笔记-CNN/index.html","b48ff56067dfab9e8ed1b202df7ed542"],["D:/blog/public/2018/08/27/李宏毅MachineLearning学习笔记-CNN/parameter.png","082984d69218a881d2226f396cce8095"],["D:/blog/public/2018/10/10/光影流年-时空恋旅人/20140417103434-649593752.jpg","db3919bd23c8f1d39305aeffc04304cd"],["D:/blog/public/2018/10/10/光影流年-时空恋旅人/index.html","2dea9b29cb9a127459d2c222ce64d16e"],["D:/blog/public/2018/10/10/光影流年-时空恋旅人/u=3016089955,73941064&fm=214&gp=0.jpg","6c688a9c18b1c78827dd368e7ec786b3"],["D:/blog/public/2018/10/13/光影流年-触不可及-Intouchables/edf6b52706fd7670693ba0238a6e51c11255de20.jpg","c94f5fea2fa52160014c153c50c841ba"],["D:/blog/public/2018/10/13/光影流年-触不可及-Intouchables/index.html","ed7a5673465cbf2f74f3fb282881ae29"],["D:/blog/public/2018/10/13/光影流年-触不可及-Intouchables/半星.png","aece5b4f53ebf4a3d9530d18eedf31c0"],["D:/blog/public/2018/10/13/光影流年-触不可及-Intouchables/实五角星.png","e83a355a7a955aee7d36574141a1dfe6"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/1.png","9286a485a9add719d526955788f742ec"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/10.jpg","57a8f2b3946d9ed6378612ce5404ee20"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/10.png","f1deac0f096a1a5b0d3401a80a1798b5"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/11.jpg","595db9dabadf299aa30e08946882deed"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/11.png","14ed7dc8dc6804651deabfb9be4ecfbd"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/12.png","eb66b469c90c83405db0f5e3812be7ad"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/13.jpg","2540bda15729d37421ba0f1b88bb88e6"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/13.png","7bd22e3c502c5c87cd830c52d03282a8"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/14.jpg","852597ec1ecffd0183ec4a223b8b7d2a"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/14.png","9d5f09b9000a03394f216fd604b40b09"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/15.png","e6ac7800da6aec9d65812ef66e0840d1"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/2.png","e589cf4a63f8af32cacd463bf1872a40"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/3.jpg","dffe34e5e83ef4154b6a7dd6948540ab"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/4.jpg","ec5d1ba2cc8ceb7333a0c42b8e3bedcc"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/5.png","94bca6d5eb4461ce3347478a6ff7f139"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/6.png","6cc068418fde938ffd21e0102fbd4f13"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/7.png","e8060c713e35461368cbda574195af33"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/8.png","c6d4c27edbdaf8779b828cb4538fd33a"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/9.png","50d251fc43e2f1e5e6682f1ddf5ba81b"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/index.html","78a01d253c3b6f35dc96620afef02ba6"],["D:/blog/public/2018/10/26/光影流年-天堂电影院/1.jpg","8bc3293631c83d08e3b4bf5fae49fd0e"],["D:/blog/public/2018/10/26/光影流年-天堂电影院/index.html","e78a3acc2ad1052d72c12e1ca7b766d1"],["D:/blog/public/2018/10/29/光影流年-伯德小姐/1.gif","eb81e1072a6c03b78a8f7c76432c685f"],["D:/blog/public/2018/10/29/光影流年-伯德小姐/index.html","8b24d8c4426666fc674e92099fe505a2"],["D:/blog/public/2018/10/29/光影流年-伯德小姐/lady bird.jpg","251620d9a523181e801e2c8bb30a6510"],["D:/blog/public/2018/10/31/Python常用语法总结/1.png","a77a6adff111ca177ab92ce4df6b40ed"],["D:/blog/public/2018/10/31/Python常用语法总结/2.png","92fe21e0794f1af6d5b69be0b05af504"],["D:/blog/public/2018/10/31/Python常用语法总结/3.png","fc9acd71cba163dd0083f08c29bc6cdb"],["D:/blog/public/2018/10/31/Python常用语法总结/index.html","fc99b6449df8846e171ad1897043ecf8"],["D:/blog/public/2018/11/09/光影流年-我是传奇/index.html","b06600f6d43c2aa6b28119e9262de8ca"],["D:/blog/public/2018/11/09/光影流年-我是传奇/我是传奇.jpg","0fbb8dbf9f0abaec74feded56b1e10c4"],["D:/blog/public/2019/07/23/托福口语-Task2语料仓库/index.html","b8d81abe5ac2621144fc03a3c3a1e257"],["D:/blog/public/2019/08/04/医学图像分割-Unet-Unet/Unet++网络结构.jpg","19242a1c5cb987dbe6d0a460f2254cd4"],["D:/blog/public/2019/08/04/医学图像分割-Unet-Unet/Unet网络结构.jpg","eafcb37ff4f5c86923590e93c386021a"],["D:/blog/public/2019/08/04/医学图像分割-Unet-Unet/index.html","f61bd38be13efbcd93a178898fbf9de2"],["D:/blog/public/2019/09/23/托福写作-炫酷表达/index.html","94ab060c42f7c09f297e62377fb0a300"],["D:/blog/public/2019/09/23/托福口语-常用表达句式/index.html","8df55d09ea41d2bf627758c43606c738"],["D:/blog/public/2019/09/23/托福听力-答题小Tip/index.html","dea10a952d5786f0e466dc3b20238870"],["D:/blog/public/2019/09/23/托福阅读-答题小Tip/index.html","18c820a7dfdeadcdd9fece303559cd8f"],["D:/blog/public/2019/11/09/医学图像learning-皱纹检测Wrinkle-Detection/index.html","9254619911322fce5068291cf8eda12d"],["D:/blog/public/2019/11/09/医学图像learning-皱纹检测Wrinkle-Detection/皱纹特征量化.jpg","691566c2c9985149a1dc56da70303c9a"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/index.html","d0799f9e1e83565ea6b6bda933e98fa1"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/分级描述.png","9b7483061abc63cf81979ee57c39bae1"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/分级步骤.png","c904400fe4fe169c6e7534fabc68f904"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/医学成像设备的比较.png","c46d5a30bd507c0613692d29a001c368"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/外眦皱纹IV型.png","ca80234cab404ff1b63a3561d0259168"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/女性外眦皱纹.png","d6fb7d845814187f0f618ac9273f0e51"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/室内外组分析.png","b0375a516f1d5b918afbd5e411759fc4"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/常用皱纹评价1.png","fd0ce8adb5b0088a93526f14f0b0cd28"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/常用皱纹评价2.png","c432b297f0ea650e217cca881bb0140b"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/皱纹1.png","1cc6cec05ff06f5766343e3af98d76e2"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/皱纹原因1.png","284e2e0c2eacb073b791ef2a444e4a0e"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/皱纹原因2.png","f2b588c399c4c1856eee4105524a8890"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/老化状况分析.png","7755812de70ace5300ed1c3e584c4688"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/鱼尾纹标准图册-动.png","e4da1f73066f66b17af7256b71432aac"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/鱼尾纹标准图册.png","0a790caa377b99821a3e70d227c91489"],["D:/blog/public/2020/01/11/医学图像learning-1997-Glogau分级/index.html","b42dc62dec181e53f4674f3322d33326"],["D:/blog/public/about/index.html","5ebfe9e5d38252e54991a5d58a4fe1d5"],["D:/blog/public/archives/2018/07/index.html","ca4695e5cccb61ae5a694b59e04c3dff"],["D:/blog/public/archives/2018/08/index.html","e85091d5c40220596851e529b2165797"],["D:/blog/public/archives/2018/10/index.html","51ccf170da3bf06be0d91c3b382636c9"],["D:/blog/public/archives/2018/11/index.html","fbb0e34b5c8c79a3b0a0e017f544b170"],["D:/blog/public/archives/2018/index.html","2b7e5d45ac8c29857d31d09a01ea728e"],["D:/blog/public/archives/2018/page/2/index.html","beb5ae51bb1eda3a7ac7dbc681b630ee"],["D:/blog/public/archives/2019/07/index.html","e020dfd82713ed3294df84977b180e2c"],["D:/blog/public/archives/2019/08/index.html","a37f27364a95186ddf88a3a5aa2445b7"],["D:/blog/public/archives/2019/09/index.html","4a5c8d3a4207dee85c9e75ea32cedeec"],["D:/blog/public/archives/2019/11/index.html","b5374237c7dfcb252c27f0c8ea8875ed"],["D:/blog/public/archives/2019/index.html","8927f90886c28755cc91a7defd8c4892"],["D:/blog/public/archives/2020/01/index.html","71a5228b56f368dbd5b151d67042f4b3"],["D:/blog/public/archives/2020/index.html","28e5f3bf0ac62bc1a67763a129f98218"],["D:/blog/public/archives/index.html","28092e257bb7d35dbd40e0a0a02182b9"],["D:/blog/public/archives/page/2/index.html","f5dfd9a02a1c245e2a069ef3fb1b5012"],["D:/blog/public/archives/page/3/index.html","daa5b1b6143e316c856ffeab043fcf12"],["D:/blog/public/categories/TOEFL/Listening/index.html","25153f1a6c931551032cd83adaa402b6"],["D:/blog/public/categories/TOEFL/Reading/index.html","ca57d3447ed2f798f3035099bb1cfa57"],["D:/blog/public/categories/TOEFL/Speaking/index.html","2d3590da8df10e9d4bb91f6de7682c0c"],["D:/blog/public/categories/TOEFL/Writing/index.html","e44f7f89306f7d5296fceb1d7013d7a8"],["D:/blog/public/categories/TOEFL/index.html","9cdc21af13d888568c0b02c083b5d335"],["D:/blog/public/categories/index.html","f707ec6fbedbfbfa3cec9f1b8748b3d9"],["D:/blog/public/categories/wonderful/index.html","97d6943c1dd9721fab8c6d98d17e3002"],["D:/blog/public/categories/光影流年/index.html","b6223c6c6d2338d931d926601c69cac5"],["D:/blog/public/categories/光影流年/人生/index.html","03b80c2f0b3919f39cbf993995b6d066"],["D:/blog/public/categories/光影流年/友谊/index.html","b5074f64d20419f813bb88f2c3fba48a"],["D:/blog/public/categories/光影流年/科幻/index.html","907e4c26c73d47abb9c5ce7a87454353"],["D:/blog/public/categories/光影流年/青春/index.html","3b581ed1274d6f28db3922930a776064"],["D:/blog/public/categories/机器学习/index.html","181fd13512218e68076aae0946ede97b"],["D:/blog/public/categories/机器学习/吴恩达DeepLearning/01-神经网络和深度学习/index.html","4f0fe2e82902419d7d242e8419ca23a5"],["D:/blog/public/categories/机器学习/吴恩达DeepLearning/index.html","5c9afa90ec92cb61aad55b797021b73e"],["D:/blog/public/categories/机器学习/李宏毅MachineLearning/CNN-卷积神经网络/index.html","b9713841ad5e7321ec52c536b958e7bc"],["D:/blog/public/categories/机器学习/李宏毅MachineLearning/index.html","da581dc7c2385e14fab5b531ea09ee5d"],["D:/blog/public/categories/机器学习/矩阵革命：重装上阵/index.html","dc80fd10744446c61c48be79bc03e605"],["D:/blog/public/categories/经验/Markdown写作/index.html","1aea01b66b990e7cf7d30291a2a6e209"],["D:/blog/public/categories/经验/Python/index.html","65b6d24542bac6e809dd06092b16be62"],["D:/blog/public/categories/经验/index.html","b9b36d47d21f9d47eef59ee39623604a"],["D:/blog/public/categories/经验/搭建博客/index.html","69c778d284554e72bba5cf6786d32860"],["D:/blog/public/categories/经验/深度学习/index.html","54dc746c1970bac43fa6602de3d03919"],["D:/blog/public/css/index.css","c8a84552ab0ea9e060e544bbd9b6a809"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/img/donate1.png","b1873c1bbb3d1b8cbbfec92a82784025"],["D:/blog/public/img/donate2.png","da059a2e426ae087955e0f1d066d7e9a"],["D:/blog/public/img/favicon.png","6bf43c093c45a6ef2566d4d1483b9902"],["D:/blog/public/img/header.jpg","da059a2e426ae087955e0f1d066d7e9a"],["D:/blog/public/img/placeholder.png","0b6b775afff27df04828aafd0bc794b1"],["D:/blog/public/img/sigmoid函数.png","01b0908cc198776965606475213c66a8"],["D:/blog/public/img/yk.jpg","9d46b69538ba3fff50f4f403e89ca9c0"],["D:/blog/public/img/紫色海边.jpg","b280abe6cd96766bf9538d1c813ea0a0"],["D:/blog/public/img/草.jpg","d09e094da38e1ca196f0a43007f9013f"],["D:/blog/public/img/落基山脉.jpg","1c41502b8d53a1caf907f31013685461"],["D:/blog/public/img/蝙蝠侠.png","54abad580fc6588cdefaf6c4e1124267"],["D:/blog/public/index.html","219e59750629145533029d2142a7610a"],["D:/blog/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["D:/blog/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["D:/blog/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","b11ec25666563f38f6ad1e6b0652bc28"],["D:/blog/public/page/3/index.html","7903959705b8439d1fa5d99151dba190"],["D:/blog/public/tags/Movie/index.html","32fbe8efb22daa8fa6c2fbfc428c83fd"],["D:/blog/public/tags/TOEFL/index.html","cd5d99868df3bf7adedcd9f4aeead22a"],["D:/blog/public/tags/index-1.html","5f9bbcddda65a1e7883f82f232afc94e"],["D:/blog/public/tags/index.html","bea01f78f392e6151e8837c3922546e9"],["D:/blog/public/tags/wonderful/index.html","459e377a87b914f0e41cfaa37b229eb7"],["D:/blog/public/tags/亲情/index.html","cc22894b67dcc8ce66905a22213dc7b4"],["D:/blog/public/tags/人生/index.html","39e3a7a35bb54694ada4b6fa240ff438"],["D:/blog/public/tags/医学/index.html","50c5b3ac3037a45df213d343504fb152"],["D:/blog/public/tags/友谊/index.html","f61f1df781ce3cece906333c1679a068"],["D:/blog/public/tags/惊悚/index.html","60ffd79d215e928867205f843d0be6cf"],["D:/blog/public/tags/机器学习/index.html","ef2cc35b66d8fe658b9ce0a215461066"],["D:/blog/public/tags/爱情/index.html","45c56ae7f314567fec6dcfc268336f83"],["D:/blog/public/tags/矩阵革命/index.html","aed2a254a788005163b3dbc1078d6432"],["D:/blog/public/tags/科幻/index.html","b3b47fb49bae1b1abc06b2fe4c7adf31"],["D:/blog/public/tags/经验指南/index.html","7108b2be37e9f76c9d43d3dcbc801343"],["D:/blog/public/tags/青春/index.html","bc3ce2eb69c63d5078328c92c9e5696b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







