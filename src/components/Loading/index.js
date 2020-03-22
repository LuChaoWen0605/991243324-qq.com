/*
   自定义 loading 组件
   调用
   this.$loading('正在加载中...');
   this.$loading.close();
   修改绑定指令 ： v-loading
*/
let _LOADING = {
  show: false,     // Boolean loading显示状态
  component: null  // Object loading组件
};
export default {
  install(Vue) {
    /*
        text: String
        type: String
    */
    Vue.prototype.$loading = function(text='loading', type) {
      if (type == 'close') {
        _LOADING.component.show = _LOADING.show = false;
      } else {
        if (_LOADING.show) {
          return;
        }
        let LoadingCompoent = Vue.extend({
          data: function() {
            return {
              show: _LOADING.show
            }
          },
          template: `<div v-show="show" class="loading-mask"><div class="loading-left-bg" ><div class="loading-left-bg-cp"></div></div></div>`
        });
        _LOADING.component = new LoadingCompoent();
        let element = _LOADING.component.$mount().$el;
        document.body.appendChild(element);
        _LOADING.component.show = _LOADING.show = true;
      }
    };
    // 打开/关闭
    ['open', 'close'].forEach(function(type) {
      Vue.prototype.$loading[type] = function(text) {
        return Vue.prototype.$loading(text, type);
      }
    });

    //绑定指令
    Vue.directive('loading', {
      bind: (el, binding) => {
        const tempDiv = document.createElement('div')
        tempDiv.className = 'loading-mask'
        const round = document.createElement('div')
        round.className = 'loading-left-bg'
        const round1 = document.createElement('div')
        round1.className = 'loading-left-bg-cp'
        round.appendChild(round1)
        tempDiv.appendChild(round)
        el.loadingElement = tempDiv
        const curStyle = window.getComputedStyle(el)
        const position = curStyle.position
        if (position === 'absolute' || position === 'relative') {
          el.style.position = position
        } else {
          el.style.position = 'relative'
        }
        if (binding.value) {
          el.appendChild(tempDiv)
        }
      },
      update: (el, binding) => {
        if (binding.value) {
          if (el.loadingElement.parentNode === null) {
            el.appendChild(el.loadingElement)
          }
        } else {
          if (el === el.loadingElement.parentNode) {
            el.removeChild(el.loadingElement)
          }
        }
      },
      unbind: (el) => {
        if (el.loadingElement.parentNode === el) {
          el.removeChild(el.loadingElement)
        }
        el.loadingElement = null
      }
    })



  }
}



