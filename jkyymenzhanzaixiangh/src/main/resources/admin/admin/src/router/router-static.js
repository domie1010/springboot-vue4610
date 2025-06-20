import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import address from '@/views/modules/address/list'
    import cart from '@/views/modules/cart/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import news from '@/views/modules/news/list'
    import yaopin from '@/views/modules/yaopin/list'
    import yaopinCollection from '@/views/modules/yaopinCollection/list'
    import yaopinCommentback from '@/views/modules/yaopinCommentback/list'
    import yaopinOrder from '@/views/modules/yaopinOrder/list'
    import yisheng from '@/views/modules/yisheng/list'
    import yishengChat from '@/views/modules/yishengChat/list'
    import yishengCollection from '@/views/modules/yishengCollection/list'
    import yishengCommentback from '@/views/modules/yishengCommentback/list'
    import yishengLiuyan from '@/views/modules/yishengLiuyan/list'
    import yishengYuyue from '@/views/modules/yishengYuyue/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryIsdefault from '@/views/modules/dictionaryIsdefault/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
    import dictionaryYaopin from '@/views/modules/dictionaryYaopin/list'
    import dictionaryYaopinCollection from '@/views/modules/dictionaryYaopinCollection/list'
    import dictionaryYaopinOrder from '@/views/modules/dictionaryYaopinOrder/list'
    import dictionaryYaopinOrderPayment from '@/views/modules/dictionaryYaopinOrderPayment/list'
    import dictionaryYisheng from '@/views/modules/dictionaryYisheng/list'
    import dictionaryYishengChat from '@/views/modules/dictionaryYishengChat/list'
    import dictionaryYishengCollection from '@/views/modules/dictionaryYishengCollection/list'
    import dictionaryYishengYuyue from '@/views/modules/dictionaryYishengYuyue/list'
    import dictionaryZhiwei from '@/views/modules/dictionaryZhiwei/list'
    import dictionaryZhuangtai from '@/views/modules/dictionaryZhuangtai/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryIsdefault',
        name: '是否默认地址',
        component: dictionaryIsdefault
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryYaopin',
        name: '药品类型',
        component: dictionaryYaopin
    }
    ,{
        path: '/dictionaryYaopinCollection',
        name: '收藏表类型',
        component: dictionaryYaopinCollection
    }
    ,{
        path: '/dictionaryYaopinOrder',
        name: '订单类型',
        component: dictionaryYaopinOrder
    }
    ,{
        path: '/dictionaryYaopinOrderPayment',
        name: '订单支付类型',
        component: dictionaryYaopinOrderPayment
    }
    ,{
        path: '/dictionaryYisheng',
        name: '科室',
        component: dictionaryYisheng
    }
    ,{
        path: '/dictionaryYishengChat',
        name: '数据类型',
        component: dictionaryYishengChat
    }
    ,{
        path: '/dictionaryYishengCollection',
        name: '收藏表类型',
        component: dictionaryYishengCollection
    }
    ,{
        path: '/dictionaryYishengYuyue',
        name: '挂号状态',
        component: dictionaryYishengYuyue
    }
    ,{
        path: '/dictionaryZhiwei',
        name: '职位',
        component: dictionaryZhiwei
    }
    ,{
        path: '/dictionaryZhuangtai',
        name: '状态',
        component: dictionaryZhuangtai
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/address',
        name: '收货地址',
        component: address
      }
    ,{
        path: '/cart',
        name: '购物车',
        component: cart
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/news',
        name: '公告信息',
        component: news
      }
    ,{
        path: '/yaopin',
        name: '药品',
        component: yaopin
      }
    ,{
        path: '/yaopinCollection',
        name: '药品收藏',
        component: yaopinCollection
      }
    ,{
        path: '/yaopinCommentback',
        name: '药品评价',
        component: yaopinCommentback
      }
    ,{
        path: '/yaopinOrder',
        name: '药品订单',
        component: yaopinOrder
      }
    ,{
        path: '/yisheng',
        name: '医生',
        component: yisheng
      }
    ,{
        path: '/yishengChat',
        name: '用户咨询',
        component: yishengChat
      }
    ,{
        path: '/yishengCollection',
        name: '医生收藏',
        component: yishengCollection
      }
    ,{
        path: '/yishengCommentback',
        name: '医生评价',
        component: yishengCommentback
      }
    ,{
        path: '/yishengLiuyan',
        name: '医生留言',
        component: yishengLiuyan
      }
    ,{
        path: '/yishengYuyue',
        name: '挂号',
        component: yishengYuyue
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
