<template>
    <div class="body">
        <header class="header"><img src="../assets/bn.png" alt=""></header>
        <div class="main">
            <div class="classification">
                <div class="box">
                    <p class="title">黄金VIP会员</p>
                    <p class="info">海量剧随心看</p>
                </div>
                <div class="box">
                    <p class="title">白金VIP会员</p>
                    <p class="info">电视剧也能看</p>
                </div>
                <div class="box">
                    <p class="title">星钻VIP会员</p>
                    <p class="info">畅享多会员</p>
                </div>
            </div>
            <div class="middle-title">
                <van-divider :style="{ color: '#d1ad6e', borderColor: '#d1ad6e' }">电视/手机/VR等众多权益</van-divider>
            </div>
            <div class="price-classify">
                <div class="month box" @click="isSelect(1)" :class="{ 'bgc': index === 1 }">
                    <div class=" up">星钻月卡</div>
                    <div class="dwon">
                        <span>¥</span>38
                    </div>
                </div>
                <div class="quarter box" @click="isSelect(2)" :class="{ 'bgc': index === 2 }">
                    <div class="up">星钻季卡</div>
                    <div class="dwon">
                        <span>¥</span>88
                    </div>
                </div>
                <div class="year box" @click="isSelect(3)" :class="{ 'bgc': index === 3 }">
                    <div class="up">星钻年卡</div>
                    <div class="dwon">
                        <span>¥</span>288
                    </div>
                </div>
            </div>
            <div class="phone">
                <p>
                    输入用户手机号
                </p>
                <van-field :border="false" v-model.trim="value" placeholder="请输入用户手机号" type="number" />
            </div>
            <div class="btn" @click="open">
                立即开通
            </div>
            <div class="more">
                <p class="title">更多特权</p>
                <img src="../assets/921f3d8a09e74df6bf9e3acb202349308745195009167694721.png" alt="">
            </div>
        </div>
        <footer>
            <img src="../assets/cashier-logo-220426.png" alt="">
        </footer>
    </div>
</template>

<script>
import { Dialog, Toast } from 'vant'
export default {
    name: 'MbPage',

    data() {
        return {
            value: '',
            index: 3
        };
    },

    mounted() {

    },

    methods: {
        open() {
            if (this.value === '') {
                Toast.fail('请输入手机号再进行操作');
            } else {
                Dialog.confirm({
                    title: '开通vip',
                    message: `确定要给手机号${this.value}开通会员吗？`,
                    confirmButtonColor: '#d1ad6e'
                })
                    .then(() => {
                        // on confirm
                        this.value = ''
                        Dialog.alert({
                            message: '开通成功',
                            confirmButtonColor: '#d1ad6e'
                        }).then(() => {
                        });
                    })
                    .catch(() => {
                        // on cancel
                    });
            }
        },
        isSelect(index) {
            this.index = index
        }
    },
    created() {
        // this.isSelect(1)
    }
};
</script>

<style lang="less" scoped>
.body {

    // padding: 0 20px;
    .main {
        padding: 0 20px;

        .classification {
            display: flex;
            justify-content: space-evenly;

            .box {
                display: flex;
                justify-content: center;
                align-content: center;
                flex-direction: column;
                margin: 6px 0;

                .title {
                    font-size: 16px;
                    font-weight: 700;
                }

                .info {
                    text-align: center;
                    padding: 6px 0;
                    font-size: 12px;
                }
            }

        }



        .price-classify {
            height: 100px;
            width: 100%;
            // border: 1px solid #ccc;
            display: flex;
            justify-content: space-evenly;

            .box {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width: 30%;
                border: 1px solid #ccc;
                border-radius: 13px;
                margin-bottom: 6px;

                .up {}

                .dwon {
                    padding: 8px 0;
                    font-size: 28px;
                    font-weight: 700;

                    span {
                        padding-right: 3px;
                        font-size: 12px;
                    }
                }
            }
        }

        .phone {
            margin: 8px 0;

            .van-cell {
                border-bottom: 0.5px solid #ebedf0 !important;
            }
        }

        .btn {
            width: 100%;
            height: 50px;
            border-radius: 6px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: linear-gradient(45deg, #ffdd81, #ffb65b);

            .btn-v {
                // background-color: unset;
            }
        }

        .more {
            margin-top: 10px;
            width: 100%;
            height: 210px;

            img {
                width: 100%;
                height: 100%W;
            }
        }

    }

    footer {
        width: 100%;
        height: 66px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f3f5fa;

        img {
            width: 110px;
            height: 20px;
        }
    }
}

.header {
    width: 100%;
    height: 142px;

    img {
        width: 100%;
        height: 100%;
    }
}

.bgc {
    background-image: linear-gradient(45deg, #ffdd81, #ffb65b);
}
</style>