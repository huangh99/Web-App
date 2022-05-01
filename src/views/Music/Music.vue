<template>
  <div class="music-box">
    <van-nav-bar
      title="音乐倾听"
      left-text="返回"
      fixed
      :border="false"
      left-arrow
      @click-left="$router.back()"
    />
    <div class="music-content">
      <div class="music-info">
        <h4 class="music-nameAuthor">{{song.name}}</h4>
        <span class="music-nameAuthor">{{song.author}}</span>
        <div class="img-box">
          <img  ref="rotate" :src="song.cover" alt="">
        </div>
        <div class="lyric-box">
          <div class="lyric-content" ref="lyric">
            <p class="van-ellipsis" :id="item.time" v-for="(item,index) in content" :key="index" v-html="item.text"></p>
          </div>
        </div>
      </div>
      <audio ref="audio" :src="song.path"></audio>
      <!-- <audio ref="audio" src="../../assets/audio/大千世界-许嵩.mp3"></audio> -->
      <div class="music-controls">
        <div class="music-slider">
          <div>{{currentTime}}</div>
          <van-slider v-model="value" step="0.01" :max="maxTime" bar-height="4px" active-color="#1CE93D" button-size="18" @change="onChange" />
          <div>{{totalTime}}</div>
        </div>
        <span class="iconfont icon-play-previous" @click="handlePrevious"></span>
        <span class="iconfont icon-pause" v-if="isPlay" @click="handlePause"></span>
        <span class="iconfont icon-play" v-else @click="handlePlay"></span>
        <span class="iconfont icon-play-next" @click="handleNext"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { formatSeconds } from '@/utils/functions'
import { getSongInfoAPI } from '@/api/otherAPI'
export default {
  name: 'Music',
  data() {
    return {
      isPlay: false,
      audio: undefined,
      elementLyric: undefined,
      value: 0,
      maxTime: 100,
      totalTime: '00:00',
      currentTime: '00:00',
      content: '',
      songList: [],
      song: {},
      index: 0
    }
  },
  methods: {
    handlePlay() {
      this.isPlay = true
      this.audio.play().then(() => {
        this.$refs.rotate.style.animationPlayState = 'running'
      })
    },
    handlePause() {
      this.isPlay = false
      this.audio.pause()
      this.$refs.rotate.style.animationPlayState = 'paused'
    },
    handlePrevious() {
      this.index--
      this.content = ''
      if (this.index < 0) this.index = this.songList.length - 1
      this.song = this.songList[this.index]
      this.end()
    },
    handleNext() {
      this.index++
      this.content = ''
      if (this.index === this.songList.length) this.index = 0
      this.song = this.songList[this.index]
      this.end()
    },
    onChange(value) {
      this.audio.currentTime = value
    },
    updateTime() {
      this.currentTime = formatSeconds(this.audio.currentTime)
      this.value = parseFloat(this.audio.currentTime.toFixed(2))
    },
    end() {
      this.isPlay = false
      this.$refs.rotate.style.animationPlayState = 'paused'
    },
    initSlider() {
      this.totalTime = formatSeconds(this.audio.duration)
      this.maxTime = this.audio.duration.toFixed(2)
      this.showLyric()
    },
    showLyric() {
      let lyricArr = this.song.lyric.replace(/\n/g, '')
      lyricArr = lyricArr.split('[')
      const newArr = lyricArr.map(item => {
        const obj = {}
        const totalTime = item.split('.')
        const time = totalTime[0]
        const arr = item.split(']')
        const text = arr[1]
        obj.time = time
        if (!text) {
          obj.text = '<br>'
        } else {
          obj.text = text
        }
        return obj
      })
      this.content = newArr
    },
    async getDataList() {
      const { data: res } = await getSongInfoAPI()
      if (res.status === 0) {
        this.songList = res.data
        this.song = this.songList[0]
      }
    }
  },
  watch: {
    currentTime: {
      handler(newV, oldV) {
        if (document.getElementById(oldV)) {
          for (let index = 0; index < this.elementLyric.length; index++) {
            if (index > 2) {
              if (this.elementLyric[index].id === oldV) {
                this.$refs.lyric.style.top = -32 * (index - 3) + 'px'
              }
            }
            this.elementLyric[index].classList.remove('active')
          }
          document.getElementById(oldV).classList.add('active')
        }
      },
      immediate: true
    }
  },
  created() {
    this.getDataList()
  },
  mounted() {
    this.audio = this.$refs.audio
    this.audio.ontimeupdate = this.updateTime
    this.audio.onended = this.end
    this.audio.oncanplay = this.initSlider
    this.elementLyric = this.$refs.lyric.children
  }

}
</script>

<style lang="less" scoped>
.music-box{
  .van-nav-bar{
    background-color: rgba(0,0,0,0);
    /deep/.van-nav-bar__title,/deep/.van-nav-bar__text,/deep/.van-icon{
      color: #fff;
    }
  }
  .music-content{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #aaaaaa;
    .music-info{
      margin: 50px 40px 0;
      text-align: center;
      .music-nameAuthor{
        color: #fff;
      }
      .img-box{
        img{
          width: 100px;
          height: 100px;
          margin: 20px auto 0;
          border: 40px solid #000;
          border-radius: 50%;
          animation: rotate 12s linear infinite forwards;
          animation-play-state: paused;
        }
        @keyframes rotate {
          from{
            transform: rotate(0deg);
          }
          to{
            transform: rotate(360deg);
          }
        }
      }
      .lyric-box{
        height: 224px;
        // background-color: #ccc;
        overflow: hidden;
        .lyric-content{
          position: relative;
          left: 0;
          top: 0;
          // background-color: rgba(11, 4, 115, 0.353);
          p{
            margin: 0;
            padding: 5px 0;
            height: 22px;
            line-height: 22px;
            color: #fff;
          }
          .active{
            font-size: 18px;
            color: rgb(236, 38, 38);
          }
        }
      }
    }
    .music-controls{
      // background-color: blue;
      width: 100%;
      position: absolute;
      bottom: 40px;
      text-align: center;
      .music-slider{
        display: flex;
        width: 300px;
        margin: 10px auto 30px;
        align-items: center;
        div{
          margin: 0 7px;
          color: #fff;
        }
      }
      span{
        margin: 0 20px;
        font-size: 30px;
        border: 2px solid #fff;
        border-radius: 50%;
        color: #fff;
        .icon-pause,.icon-play{
          border: 1px solid #fff;
        }
      }
    }
  }
}

</style>
