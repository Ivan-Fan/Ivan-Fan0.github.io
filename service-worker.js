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

var precacheConfig = [["D:/blog/public/2018/07/22/记下美好的瞬间（一）-Ivan-s-blog-诞生/index.html","68b4df9b6cd4ef65fda354c6fefc0c32"],["D:/blog/public/2018/07/25/用hexo-GitHub搭建个人博客指南/index.html","b9eb09adc3b172e776decff5ccac9a99"],["D:/blog/public/2018/08/15/吴恩达deeplearning学习笔记（一）-logistic回归/index.html","527012ed85074fb795c0324a66c20ccc"],["D:/blog/public/2018/08/15/吴恩达deeplearning学习笔记（一）-logistic回归/sigmoid函数.png","01b0908cc198776965606475213c66a8"],["D:/blog/public/2018/08/18/托福写作-独立写作模板/index.html","9b39d3a08edea099c7abd7c97feef30e"],["D:/blog/public/2018/08/18/托福写作-独立写作要点须知-模板/index.html","22a3871616efe5e5cc643e31ec7df04a"],["D:/blog/public/2018/08/18/托福写作-独立写作要点须知-模板/绝对词类文章结构.png","cdc093ecb762eff786ed688e41458547"],["D:/blog/public/2018/08/18/托福口语-Task1语料仓库/index.html","484838afd45157579e5faadf0bac6895"],["D:/blog/public/2018/08/20/Markdown语法tips/1.png","5bcd224a0a252b78b54ebc9a6a0058a8"],["D:/blog/public/2018/08/20/Markdown语法tips/2.png","463ff2c9409d43d82e0070449425027b"],["D:/blog/public/2018/08/20/Markdown语法tips/3.png","35eeae7bee34db339aa4cd09eb87fd04"],["D:/blog/public/2018/08/20/Markdown语法tips/index.html","3133df9268c6cc4e9d775f309cf63ab7"],["D:/blog/public/2018/08/20/Markdown语法tips/u.jpg","c6c2993dbe6957e423148a70ff377775"],["D:/blog/public/2018/08/23/托福写作-综合写作模板/index.html","8ffd3c9b559767149d51247faf764610"],["D:/blog/public/2018/08/23/托福口语-Task3-5模板/index.html","23d872b27e6325e90df049750ae3fd10"],["D:/blog/public/2018/08/23/托福口语-Task3-5模板/introduction.png","1eb2eb6702977d05022e157f6c052fe7"],["D:/blog/public/2018/08/23/托福口语-Task3-5模板/problem.png","b6caf3da23119d85a8a460bfb8523afc"],["D:/blog/public/2018/08/23/托福口语-Task3-5模板/task3.png","414fe360fa7113538abaf0a7061357cd"],["D:/blog/public/2018/08/23/托福口语-Task3-5模板/title.png","f19c4f7817adee5c044b73fca0958524"],["D:/blog/public/2018/08/27/李宏毅MachineLearning学习笔记-CNN/Keras.png","b832584bae9d420c907d91456606d410"],["D:/blog/public/2018/08/27/李宏毅MachineLearning学习笔记-CNN/flatten.png","d3da568ebe70e04608818c8aa9962ef7"],["D:/blog/public/2018/08/27/李宏毅MachineLearning学习笔记-CNN/index.html","fff1eaffa108b0228fc0166b7c5fa09a"],["D:/blog/public/2018/08/27/李宏毅MachineLearning学习笔记-CNN/parameter.png","082984d69218a881d2226f396cce8095"],["D:/blog/public/2018/10/10/光影流年-时空恋旅人/20140417103434-649593752.jpg","db3919bd23c8f1d39305aeffc04304cd"],["D:/blog/public/2018/10/10/光影流年-时空恋旅人/index.html","05b5c9c581943cf71d85648121441d03"],["D:/blog/public/2018/10/10/光影流年-时空恋旅人/u=3016089955,73941064&fm=214&gp=0.jpg","6c688a9c18b1c78827dd368e7ec786b3"],["D:/blog/public/2018/10/13/光影流年-触不可及-Intouchables/edf6b52706fd7670693ba0238a6e51c11255de20.jpg","c94f5fea2fa52160014c153c50c841ba"],["D:/blog/public/2018/10/13/光影流年-触不可及-Intouchables/index.html","edd26febce38bd120a741536bbe8c897"],["D:/blog/public/2018/10/13/光影流年-触不可及-Intouchables/半星.png","aece5b4f53ebf4a3d9530d18eedf31c0"],["D:/blog/public/2018/10/13/光影流年-触不可及-Intouchables/实五角星.png","e83a355a7a955aee7d36574141a1dfe6"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/1.png","9286a485a9add719d526955788f742ec"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/10.jpg","57a8f2b3946d9ed6378612ce5404ee20"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/10.png","f1deac0f096a1a5b0d3401a80a1798b5"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/11.jpg","595db9dabadf299aa30e08946882deed"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/11.png","14ed7dc8dc6804651deabfb9be4ecfbd"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/12.png","eb66b469c90c83405db0f5e3812be7ad"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/13.jpg","2540bda15729d37421ba0f1b88bb88e6"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/13.png","7bd22e3c502c5c87cd830c52d03282a8"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/14.jpg","852597ec1ecffd0183ec4a223b8b7d2a"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/14.png","9d5f09b9000a03394f216fd604b40b09"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/15.png","e6ac7800da6aec9d65812ef66e0840d1"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/2.png","e589cf4a63f8af32cacd463bf1872a40"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/3.jpg","dffe34e5e83ef4154b6a7dd6948540ab"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/4.jpg","ec5d1ba2cc8ceb7333a0c42b8e3bedcc"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/5.png","94bca6d5eb4461ce3347478a6ff7f139"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/6.png","6cc068418fde938ffd21e0102fbd4f13"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/7.png","e8060c713e35461368cbda574195af33"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/8.png","c6d4c27edbdaf8779b828cb4538fd33a"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/9.png","50d251fc43e2f1e5e6682f1ddf5ba81b"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/index.html","d696b05e6803e3282d90cbb98c0a69bd"],["D:/blog/public/2018/10/26/光影流年-天堂电影院/1.jpg","8bc3293631c83d08e3b4bf5fae49fd0e"],["D:/blog/public/2018/10/26/光影流年-天堂电影院/index.html","907fcd8e34785dfe87a20a5bd5f141f5"],["D:/blog/public/2018/10/29/光影流年-伯德小姐/1.gif","eb81e1072a6c03b78a8f7c76432c685f"],["D:/blog/public/2018/10/29/光影流年-伯德小姐/index.html","8e2d1ee034017696607702e21dc5556f"],["D:/blog/public/2018/10/29/光影流年-伯德小姐/lady bird.jpg","251620d9a523181e801e2c8bb30a6510"],["D:/blog/public/2018/10/31/Python常用语法总结/1.png","a77a6adff111ca177ab92ce4df6b40ed"],["D:/blog/public/2018/10/31/Python常用语法总结/2.png","92fe21e0794f1af6d5b69be0b05af504"],["D:/blog/public/2018/10/31/Python常用语法总结/3.png","fc9acd71cba163dd0083f08c29bc6cdb"],["D:/blog/public/2018/10/31/Python常用语法总结/index.html","671919d495bee64db67508c9d29c4084"],["D:/blog/public/2018/11/09/光影流年-我是传奇/index.html","6339453afb67391269ecd7b6f06a962b"],["D:/blog/public/2018/11/09/光影流年-我是传奇/我是传奇.jpg","0fbb8dbf9f0abaec74feded56b1e10c4"],["D:/blog/public/2019/07/23/托福口语-Task2语料仓库/index.html","b1cc4579d694e7e9ffe665f7a72d5704"],["D:/blog/public/2019/08/04/医学图像分割-Unet-Unet/Unet++网络结构.jpg","19242a1c5cb987dbe6d0a460f2254cd4"],["D:/blog/public/2019/08/04/医学图像分割-Unet-Unet/Unet网络结构.jpg","eafcb37ff4f5c86923590e93c386021a"],["D:/blog/public/2019/08/04/医学图像分割-Unet-Unet/index.html","e866fb47e16ae04eed8d31f7356ae590"],["D:/blog/public/2019/09/23/托福写作-炫酷表达/index.html","565b04976412aa0dc8596ed010673454"],["D:/blog/public/2019/11/09/医学图像learning-皱纹检测Wrinkle-Detection/index.html","fabe8b7899c1bc384fdb06d78ab21a71"],["D:/blog/public/2019/11/09/医学图像learning-皱纹检测Wrinkle-Detection/皱纹特征量化.jpg","691566c2c9985149a1dc56da70303c9a"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/index.html","36de743fce52e0e9c047204cd836a716"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/分级描述.png","9b7483061abc63cf81979ee57c39bae1"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/分级步骤.png","c904400fe4fe169c6e7534fabc68f904"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/医学成像设备的比较.png","c46d5a30bd507c0613692d29a001c368"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/外眦皱纹IV型.png","ca80234cab404ff1b63a3561d0259168"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/女性外眦皱纹.png","d6fb7d845814187f0f618ac9273f0e51"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/室内外组分析.png","b0375a516f1d5b918afbd5e411759fc4"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/常用皱纹评价1.png","fd0ce8adb5b0088a93526f14f0b0cd28"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/常用皱纹评价2.png","c432b297f0ea650e217cca881bb0140b"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/皱纹1.png","1cc6cec05ff06f5766343e3af98d76e2"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/皱纹原因1.png","284e2e0c2eacb073b791ef2a444e4a0e"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/皱纹原因2.png","f2b588c399c4c1856eee4105524a8890"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/老化状况分析.png","7755812de70ace5300ed1c3e584c4688"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/鱼尾纹标准图册-动.png","e4da1f73066f66b17af7256b71432aac"],["D:/blog/public/2019/11/13/医学图像learning-皱纹形成原因与分级/鱼尾纹标准图册.png","0a790caa377b99821a3e70d227c91489"],["D:/blog/public/2020/01/11/医学图像learning-1997-Glogau分级/index.html","7fc9f7c93a8955b69465c721171ce264"],["D:/blog/public/2020/04/12/医学图像分割-大话RCNN家族秘史/Mask R-CNN 结构图.jpg","e13a5f80d01c702e3947a1d09614c87a"],["D:/blog/public/2020/04/12/医学图像分割-大话RCNN家族秘史/RPN 结构图.jpg","8ee5d515e8df3050f288ebe51cbdd9b1"],["D:/blog/public/2020/04/12/医学图像分割-大话RCNN家族秘史/anchor.jpg","815d4ab568c7ef5e504be2db43df620d"],["D:/blog/public/2020/04/12/医学图像分割-大话RCNN家族秘史/index.html","220e8e620321d20beb879f08e28ba07a"],["D:/blog/public/2020/04/12/医学图像分割-大话RCNN家族秘史/总结表格.png","3d3b492074f9b7573cbf8d5580770753"],["D:/blog/public/about/index.html","5df490d956bebf2ce52cdc1733ed52f2"],["D:/blog/public/archives/2018/07/index.html","c372afef8a99d64d779f687f7dfce8ab"],["D:/blog/public/archives/2018/08/index.html","c2c78f7ed667eb0ec2f8132e2da84e43"],["D:/blog/public/archives/2018/10/index.html","b7d8791afce9a81497701d9ce056a525"],["D:/blog/public/archives/2018/11/index.html","3528cb0c25375e9e28c9c81fb2e02b51"],["D:/blog/public/archives/2018/index.html","d5332ea3abf5f379d1597838ed200021"],["D:/blog/public/archives/2018/page/2/index.html","d66ba90a81fa3c37c395e37a45f50ba8"],["D:/blog/public/archives/2019/07/index.html","7ca97e153ef79f7e3876e1ba60ab42e3"],["D:/blog/public/archives/2019/08/index.html","d3f8df7d09e18df0a2e5962cfeb86d64"],["D:/blog/public/archives/2019/09/index.html","09be5b9464cbd9e4e46f2729d6de616d"],["D:/blog/public/archives/2019/11/index.html","223a3908b309dde346774cf4c6d70355"],["D:/blog/public/archives/2019/index.html","2104f29de2cf5e2a5edf96b0b0e3843c"],["D:/blog/public/archives/2020/01/index.html","e6a0eb673bc0df37dcca8b89d45749d2"],["D:/blog/public/archives/2020/04/index.html","133235993f2a27c3767d748c04984340"],["D:/blog/public/archives/2020/index.html","71a59fbd409f4a71ffbebc7bca5c84e6"],["D:/blog/public/archives/index.html","5a437f6b1aa8b94b29ea768b4a26b630"],["D:/blog/public/archives/page/2/index.html","6854db169cf1332849af23d402a71c79"],["D:/blog/public/archives/page/3/index.html","4c565003753422fcc2c51b6e474a3df3"],["D:/blog/public/categories/TOEFL/Speaking/index.html","1bf4d6f9dd1be3c01ac18d687d8fda3f"],["D:/blog/public/categories/TOEFL/Writing/index.html","64f42765f60ce9a405c6842f9bf966b4"],["D:/blog/public/categories/TOEFL/index.html","17c3a4c55a127164beb00721a7f0eed3"],["D:/blog/public/categories/index.html","e8496aa5f71d8bfd510ae9b35da462d8"],["D:/blog/public/categories/wonderful/index.html","a361176aeba8fa9ea0bdc2355a541bc9"],["D:/blog/public/categories/光影流年/index.html","0395cc913b9286feb0ee4a437bf767ba"],["D:/blog/public/categories/光影流年/人生/index.html","09399960f6dbd660a32d50f971bc8f2c"],["D:/blog/public/categories/光影流年/友谊/index.html","f8d081f65461edc8f41efd8ecc943c57"],["D:/blog/public/categories/光影流年/科幻/index.html","9649c6dea06cf3ec1434265c76023dee"],["D:/blog/public/categories/光影流年/青春/index.html","804ebd5fbd6673570f2d48b01b7c32bd"],["D:/blog/public/categories/机器学习/index.html","81cb525864ce91cbf803ecc6ed66d533"],["D:/blog/public/categories/机器学习/吴恩达DeepLearning/01-神经网络和深度学习/index.html","ba11e56d5415f0e0e087b441b13b4d27"],["D:/blog/public/categories/机器学习/吴恩达DeepLearning/index.html","0259b5fc1824a23786a800967e07912a"],["D:/blog/public/categories/机器学习/李宏毅MachineLearning/CNN-卷积神经网络/index.html","0f5a7877c217c2a89022896278c7060d"],["D:/blog/public/categories/机器学习/李宏毅MachineLearning/index.html","7a156a8e858777eebc40be4b5d0b0f0f"],["D:/blog/public/categories/机器学习/矩阵革命：重装上阵/index.html","0d80a5c674febcb9130009ef3dfe1cfe"],["D:/blog/public/categories/经验/Markdown写作/index.html","153e224e6e7eb2180d3bf95af2f5c9c1"],["D:/blog/public/categories/经验/Python/index.html","82a695cfdebedee82d98504341d8658b"],["D:/blog/public/categories/经验/index.html","e100c29c700fb3b30729e93412c47152"],["D:/blog/public/categories/经验/搭建博客/index.html","b247bd33c1b34bd4eed2798b64bd7e71"],["D:/blog/public/categories/经验/深度学习/index.html","4c7d8c04e6bee5a2b76f39fe080553b7"],["D:/blog/public/css/index.css","c8a84552ab0ea9e060e544bbd9b6a809"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/img/donate1.png","b1873c1bbb3d1b8cbbfec92a82784025"],["D:/blog/public/img/donate2.png","da059a2e426ae087955e0f1d066d7e9a"],["D:/blog/public/img/favicon.png","6bf43c093c45a6ef2566d4d1483b9902"],["D:/blog/public/img/header.jpg","da059a2e426ae087955e0f1d066d7e9a"],["D:/blog/public/img/placeholder.png","0b6b775afff27df04828aafd0bc794b1"],["D:/blog/public/img/sigmoid函数.png","01b0908cc198776965606475213c66a8"],["D:/blog/public/img/yk.jpg","9d46b69538ba3fff50f4f403e89ca9c0"],["D:/blog/public/img/zbh.jpg","1de398d92c99069c92f86529b3e6f8ce"],["D:/blog/public/img/zbh2.jpg","8c58ff9e628ec7effc857480bc9811d0"],["D:/blog/public/img/前进四.png","ba5d06898921988d9df949b0347e1da1"],["D:/blog/public/img/前进四_2.png","1252fdcd0ce38a7bb1b74c0fe4e4b5af"],["D:/blog/public/img/前进四_3.png","d6dd737fe3fb785a236ed7605200c9c7"],["D:/blog/public/img/紫色海边.jpg","b280abe6cd96766bf9538d1c813ea0a0"],["D:/blog/public/img/草.jpg","d09e094da38e1ca196f0a43007f9013f"],["D:/blog/public/img/落基山脉.jpg","1c41502b8d53a1caf907f31013685461"],["D:/blog/public/img/蝙蝠侠.png","54abad580fc6588cdefaf6c4e1124267"],["D:/blog/public/index.html","c262fbc08b9c4f43af5470d7141b1d28"],["D:/blog/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["D:/blog/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["D:/blog/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","e7996ef16df36f77bfb7ee3a77606224"],["D:/blog/public/page/3/index.html","d5005a2226d016fe978eb2d6c8f2c53c"],["D:/blog/public/tags/Movie/index.html","6efdb606d284b219fd1010de11dd2f87"],["D:/blog/public/tags/TOEFL/index.html","1a0555c1372896cb3ab867a98a619665"],["D:/blog/public/tags/index-1.html","38c574d4c1302fafd31658c88416f902"],["D:/blog/public/tags/index.html","39b359b15889f89a87b043ccd87a2b95"],["D:/blog/public/tags/wonderful/index.html","35e7032903700fcd9f56c1337c7898f3"],["D:/blog/public/tags/亲情/index.html","70399d18b00497c2f51328b764af8a33"],["D:/blog/public/tags/人生/index.html","c1835aef08c6a16db1c9b6a3aa507a41"],["D:/blog/public/tags/医学/index.html","b4c58b655aafefa7568e3dbbfb32f866"],["D:/blog/public/tags/友谊/index.html","884d8f1f73acefbf9fc5c6301f17145f"],["D:/blog/public/tags/惊悚/index.html","335257eaa4255bb64432e6b24e4e699b"],["D:/blog/public/tags/机器学习/index.html","3b1511029106a908c99b4b709cc5e1f5"],["D:/blog/public/tags/爱情/index.html","fc55fced7b3ded62e7b1623a2bee42f6"],["D:/blog/public/tags/矩阵革命/index.html","fdec33f344aeb1a642a8809107b21ebb"],["D:/blog/public/tags/科幻/index.html","fdb112b397216b9d6fd77fc5211c1ceb"],["D:/blog/public/tags/经验指南/index.html","d1cbe3555ebdea521a7dd2cc3db06163"],["D:/blog/public/tags/青春/index.html","0a1b594258abb7b757e3290236518f21"]];
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







