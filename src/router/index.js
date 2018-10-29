import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Safety from '@/views/Safety'
import SweepCode from '../components/me/SweepCode.vue'
import Me from '../components/me/Me.vue'
import Setting from '../components/me/Setting.vue'
import PersonalData from '../components/me/PersonalData.vue'
import BindingAccount from '../components/me/BindingAccount.vue'
import StatementOfAccountChange from '../components/me/StatementOfAccountChange.vue'
import LowerScoreRecord from '../components/me/LowerScoreRecord.vue'
import UpRecord from '../components/me/UpRecord.vue'
import GroupMessage from '../components/group/GroupMessage.vue'
import CqSSCKeyBoard from '../components/keyboard/CqSSCKeyBoard.vue'
import BettingDetailed from '../components/me/BettingDetailed.vue'
import AboutBoXun from '../components/me/AboutBoXun.vue'
import GroupChatInfo from '../components/group/GroupChatInfo.vue'
import BjOpenAPrizeHistory from '../components/me/BjOpenAPrizeHistory.vue'
import CqOpenAPrizeHistory from '../components/me/CqOpenAPrizeHistory.vue'
import LuckyOpenAPrizeHistory from '../components/me/LuckyOpenAPrizeHistory.vue'
import PCColorEggOpenAPrizeHistory from '../components/me/PCColorEggOpenAPrizeHistory.vue'
import Game from '@/components/game/Game.vue'
import CqChatRoom from '../components/group/CqChatRoom.vue'
import KeyBoard1 from '../components/keyboard/KeyBoard1.0.vue'
import LuckyAirshepChatRoom from '../components/group/LuckyAirshepChatRoom.vue'
import BeijingRacingRoom from '../components/group/BeijingRacingRoom.vue'
import PCEggChatRoom from '../components/group/PCEggChatRoom.vue'
import TextKeyBoard from '../components/keyboard/TextKeyBoard.vue'
import PcEggKeyBoard from '../components/keyboard/PcEggKeyBoard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: Safety
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/safety',
      name: 'Safety',
      component: Safety
    }, {
      path: '/Game',
      name: 'Game',
      component: Game
    }, {
      path: '/SweepCode',
      name: 'SweepCode',
      component: SweepCode
    },
    {
      path: '/Me',
      name: 'Me',
      component: Me
    },
    {
      path: '/Setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/PersonalData',
      name: 'PersonalData',
      component: PersonalData
    },
    {
      path: '/BindingAccount',
      name: 'BindingAccount',
      component: BindingAccount
    },
    {
      path: '/StatementOfAccountChange',
      name: 'StatementOfAccountChange',
      component: StatementOfAccountChange
    },
    {
      path: '/LowerScoreRecord',
      name: 'LowerScoreRecord',
      component: LowerScoreRecord
    },
    {
      path: '/UpRecord',
      name: 'UpRecord',
      component: UpRecord
    },
    {
      path: '/GroupMessage',
      name: 'GroupMessage',
      component: GroupMessage
    },
    {
      path: '/CqSSCKeyBoard',
      name: 'CqSSCKeyBoard',
      component: CqSSCKeyBoard
    },
    {
      path: '/KeyBoard1',
      name: 'KeyBoard1',
      component: KeyBoard1
    },
    {
      path: '/BettingDetailed',
      name: 'BettingDetailed',
      component: BettingDetailed
    },
    {
      path: '/AboutBoXun',
      name: 'AboutBoXun',
      component: AboutBoXun
    },
    {
      path: '/GroupChatInfo',
      name: 'GroupChatInfo',
      component: GroupChatInfo
    },
    {
      path: '/BjOpenAPrizeHistory',
      name: 'BjOpenAPrizeHistory',
      component: BjOpenAPrizeHistory
    },
    {
      path: '/CqOpenAPrizeHistory',
      name: 'CqOpenAPrizeHistory',
      component: CqOpenAPrizeHistory
    },
    {
      path: '/LuckyOpenAPrizeHistory',
      name: 'LuckyOpenAPrizeHistory',
      component: LuckyOpenAPrizeHistory
    },
    {
      path: '/PCColorEggOpenAPrizeHistory',
      name: 'PCColorEggOpenAPrizeHistory',
      component: PCColorEggOpenAPrizeHistory
    },
    {
      path: '/CqChatRoom',
      name: 'CqChatRoom',
      component: CqChatRoom
    },
    {
      path: '/LuckyAirshepChatRoom',
      name: 'LuckyAirshepChatRoom',
      component: LuckyAirshepChatRoom
    },
    {
      path: '/BeijingRacingRoom',
      name: 'BeijingRacingRoom',
      component: BeijingRacingRoom
    },
    {
      path: '/PCEggChatRoom',
      name: 'PCEggChatRoom',
      component: PCEggChatRoom
    },
    {
      path: '/TextKeyBoard',
      name: 'TextKeyBoard',
      component: TextKeyBoard
    },
    {
      path: '/PcEggKeyBoard',
      name: 'PcEggKeyBoard',
      component: PcEggKeyBoard
    }
  ]
})
