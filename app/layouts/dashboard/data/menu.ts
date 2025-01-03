import { type IconType } from 'react-icons'

import {
  AffiliateManagementIcon,
  BankManagementIcon,
  BonusIcon,
  ContentManagementIcon,
  DashboardIcon,
  DepositIcon,
  DesktopMoneySiteIcon,
  DomainIcon,
  GameManagementIcon,
  MobileMoneySiteIcon,
  PaymentGatewayIcon,
  PlayerManagementIcon,
  RebateManagementIcon,
  ReportIcon,
  SettingsIcon,
  StaffIcon,
  WithdrawIcon
} from '@/layouts/dashboard'
import { type Variant } from '@/types'

export type Menu = {
  id: number
  name: string
  icon: IconType
  href?: string
  badge?: string
  badgeVariant?: Variant
  subs?: {
    id: number
    name: string
    href: string
    badge?: string
    badgeVariant?: Variant
    code: string
  }[]
}

export const menus: Menu[] = [
  {
    id: 1,
    name: 'Dashboard',
    icon: DashboardIcon,
    href: '/dashboard'
  },
  {
    id: 2,
    name: 'Domain Management',
    icon: DomainIcon,
    subs: [
      {
        id: 1,
        name: 'Domain List',
        href: '/dashboard/domain-list',
        code: 'domain_list'
      },
      {
        id: 2,
        name: 'Meta Setting',
        href: '/dashboard/meta-setting',
        code: 'meta_setting'
      }
    ]
  },
  {
    id: 3,
    name: 'Content Management',
    icon: ContentManagementIcon,
    subs: [
      {
        id: 1,
        name: 'Banner Carousel',
        href: '/dashboard/banner-carousel',
        code: 'banner'
      },
      {
        id: 2,
        name: 'Information Banner',
        href: '/dashboard/information-banner',
        code: 'banner'
      },
      {
        id: 3,
        name: 'Pop Up Banner',
        href: '/dashboard/popup-banner',
        code: 'banner'
      },
      {
        id: 4,
        name: 'Contact Us',
        href: '/dashboard/contact-us',
        code: 'contact'
      },
      {
        id: 5,
        name: 'Promotion',
        href: '/dashboard/promotion',
        code: 'promotion'
      },
      {
        id: 6,
        name: 'Mail Blast',
        href: '/dashboard/mail-blast',
        code: 'mail'
      }
    ]
  },
  {
    id: 4,
    name: 'Affiliate Management',
    icon: AffiliateManagementIcon,
    subs: [
      {
        id: 1,
        name: 'Affiliate List',
        href: '/dashboard/affiliate-list',
        code: 'affiliate_list'
      },
      {
        id: 2,
        name: 'Affiliate History',
        href: '/dashboard/affiliate-history',
        code: 'affiliate_history'
      }
    ]
  },
  {
    id: 5,
    name: 'Player Management',
    icon: PlayerManagementIcon,
    subs: [
      {
        id: 1,
        name: 'Player List',
        href: '/dashboard/player-list',
        code: 'player'
      },
      {
        id: 2,
        name: 'Who Is',
        href: '/dashboard/who-is',
        code: 'who_is'
      },
      {
        id: 3,
        name: 'Daily Info',
        href: '/dashboard/daily-info',
        code: 'daily_info'
      },
      {
        id: 4,
        name: 'Referral List',
        href: '/dashboard/referral-list',
        code: 'referral'
      },
      {
        id: 5,
        name: 'APK Notification',
        href: '/dashboard/apk-notification',
        code: 'apk_notification'
      },
      {
        id: 6,
        name: 'On Going Bet',
        href: '/dashboard/ongoing-bet',
        code: 'ongoing_bet'
      },
      {
        id: 7,
        name: 'Free Spin',
        href: '/dashboard/free-spin',
        code: 'player_free_spin'
      }
    ]
  },
  {
    id: 6,
    name: 'Bank Management',
    icon: BankManagementIcon,
    subs: [
      {
        id: 1,
        name: 'Bank Group List',
        href: '/dashboard/bank-group-list',
        code: 'bank_group'
      },
      {
        id: 2,
        name: 'Bank Accounts',
        href: '/dashboard/bank-account',
        code: 'wl_bank_account'
      },
      {
        id: 3,
        name: 'Banks',
        href: '/dashboard/bank',
        code: 'bank'
      },
      {
        id: 4,
        name: 'Player Bank Group List',
        href: '/dashboard/player-bank-group-list',
        code: 'pl_bank_group'
      },
      {
        id: 5,
        name: 'Currency Settings',
        href: '/dashboard/currency-settings',
        code: 'currency'
      },
      {
        id: 6,
        name: 'Payment Gateway Setting',
        href: '/dashboard/payment-gateway-agent-setting',
        code: 'payment_gateway'
      }
    ]
  },
  {
    id: 7,
    name: 'Rebate Management',
    icon: RebateManagementIcon,
    subs: [
      {
        id: 1,
        name: 'Rebate Group',
        href: '/dashboard/rebate-group',
        code: 'rebate_group'
      },
      {
        id: 2,
        name: 'Player Rebate Group',
        href: '/dashboard/player-rebate-group',
        code: 'pl_rebate_group'
      },
      {
        id: 3,
        name: 'Rebate Setting List',
        href: '/dashboard/rebate-setting-list',
        code: 'rebate_setting'
      },
      {
        id: 4,
        name: 'Rebate Invoice',
        href: '/dashboard/rebate-invoice',
        code: 'rebate_invoice'
      }
    ]
  },
  {
    id: 8,
    name: 'Payment Gateway',
    icon: PaymentGatewayIcon,
    subs: [
      {
        id: 1,
        name: 'Deposit List',
        href: '/dashboard/deposit-list',
        code: 'va_qr_history'
      },
      {
        id: 2,
        name: 'Disbursement',
        href: '/dashboard/disbursement',
        code: 'disbursement'
      },
      {
        id: 3,
        name: 'Balance History',
        href: '/dashboard/disbursement-balance-history',
        code: 'balance_history'
      },
      {
        id: 4,
        name: 'Recipient List',
        href: '/dashboard/recipient-list',
        code: 'recipient'
      },
      {
        id: 5,
        name: 'Report Payment Gateway',
        href: '/dashboard/report-payment-gateway',
        code: 'payment_gateway_report'
      },
      {
        id: 6,
        name: 'Settlement History',
        href: '/dashboard/settlement-history',
        code: 'settlement_history'
      },
      {
        id: 7,
        name: 'Setting Price',
        href: '/dashboard/setting-price',
        code: 'setting_price'
      }
    ]
  },
  {
    id: 9,
    name: 'Deposit',
    icon: DepositIcon,
    subs: [
      {
        id: 1,
        name: 'Deposit Monitoring',
        href: '/dashboard/deposit-monitoring',
        code: 'dp_monitoring'
      },
      {
        id: 2,
        name: 'Manual Deposit',
        href: '/dashboard/manual-deposit',
        code: 'dp_manual'
      },
      {
        id: 3,
        name: 'Deposit History',
        href: '/dashboard/deposit-history',
        code: 'dp_history'
      }
    ]
  },
  {
    id: 10,
    name: 'Withdraw',
    icon: WithdrawIcon,
    subs: [
      {
        id: 1,
        name: 'Withdraw Monitoring',
        href: '/dashboard/withdraw-monitoring',
        code: 'wd_monitoring'
      },
      {
        id: 2,
        name: 'Manual Withdraw',
        href: '/dashboard/manual-withdraw',
        code: 'wd_manual'
      },
      {
        id: 3,
        name: 'Withdraw History',
        href: '/dashboard/withdraw-history',
        code: 'wd_history'
      }
    ]
  },
  {
    id: 11,
    name: 'Report',
    icon: ReportIcon,
    subs: [
      {
        id: 1,
        name: 'Win Lose Provider',
        href: '/dashboard/win-lose-provider',
        code: 'win_lose_report'
      },
      {
        id: 2,
        name: 'Win Lose Player',
        href: '/dashboard/win-lose-player',
        code: 'win_lose_report'
      },
      {
        id: 3,
        name: 'Win Lose Game group',
        href: '/dashboard/win-lose-game-group',
        code: 'win_lose_report'
      },
      {
        id: 4,
        name: 'Transaction History',
        href: '/dashboard/transaction-history',
        code: 'transaction_history'
      },
      {
        id: 5,
        name: 'Referral Report',
        href: '/dashboard/referral-report',
        code: 'referral_report'
      },
      {
        id: 6,
        name: 'DP / WD Daily Report',
        href: '/dashboard/dp-wd-daily-report',
        code: 'dp_wd_daily_report'
      },
      {
        id: 7,
        name: 'Purchase History',
        href: '/dashboard/purchase-history',
        code: 'win_lose_report'
      }
    ]
  },
  {
    id: 12,
    name: 'Bonus',
    icon: BonusIcon,
    subs: [
      {
        id: 1,
        name: 'Bonus List',
        href: '/dashboard/bonus-list',
        code: 'bonus_list'
      },
      {
        id: 2,
        name: 'Bonus Player Monitor',
        href: '/dashboard/bonus-player-monitor',
        code: 'bonus_player_monitor'
      },
      {
        id: 3,
        name: 'Bonus Report',
        href: '/dashboard/bonus-report',
        code: 'bonus_report'
      }
    ]
  },
  {
    id: 13,
    name: 'Settings',
    icon: SettingsIcon,
    subs: [
      {
        id: 1,
        name: 'Change Password & PIN',
        href: '/dashboard/change-password-pin',
        code: ''
      },
      {
        id: 2,
        name: 'Running Text',
        href: '/dashboard/running-text',
        code: 'running_text'
      },
      {
        id: 3,
        name: 'Language & Phone Code',
        href: '/dashboard/language-phone-code',
        code: 'language_phone_code'
      },
      {
        id: 4,
        name: 'Web Setting',
        href: '/dashboard/web-setting',
        code: 'web_setting'
      },
      {
        id: 5,
        name: 'Speedpay',
        href: '/dashboard/speed-pay',
        code: 'speedpay'
      }
    ]
  },
  {
    id: 14,
    name: 'Staff',
    icon: StaffIcon,
    subs: [
      {
        id: 1,
        name: 'Staff Management',
        href: '/dashboard/staff-management',
        code: 'staff_management'
      },
      {
        id: 2,
        name: 'Whitelist IP',
        href: '/dashboard/whitelist-ip',
        code: 'whitelist_ip'
      },
      {
        id: 3,
        name: 'Announcement',
        href: '/dashboard/announcement',
        code: 'announcement'
      },
      {
        id: 4,
        name: 'Credit Balance',
        href: '/dashboard/credit-balance-log',
        code: 'credit_balance'
      },
      {
        id: 5,
        name: 'Download List',
        href: '/dashboard/download-list',
        code: 'download_list'
      },
      {
        id: 6,
        name: 'Log',
        href: '/dashboard/action-log',
        code: 'log'
      }
    ]
  },
  {
    id: 15,
    name: 'Mobile Money Site',
    icon: MobileMoneySiteIcon,
    subs: [
      {
        id: 1,
        name: 'Templates',
        href: '/dashboard/mobile-templates',
        code: 'money_site_setting'
      },
      {
        id: 2,
        name: 'Homepage',
        href: '/dashboard/mobile-homepage',
        code: 'money_site_setting'
      },
      {
        id: 3,
        name: 'Button',
        href: '/dashboard/mobile-button',
        code: 'money_site_setting'
      },
      {
        id: 4,
        name: 'Sidebar',
        href: '/dashboard/mobile-sidebar',
        code: 'money_site_setting'
      },
      {
        id: 5,
        name: 'Other Page',
        href: '/dashboard/mobile-otherpage',
        code: 'money_site_setting'
      }
    ]
  },
  {
    id: 16,
    name: 'Desktop Money Site',
    icon: DesktopMoneySiteIcon,
    subs: [
      {
        id: 1,
        name: 'Templates',
        href: '/dashboard/desktop-templates',
        code: 'money_site_setting'
      },
      {
        id: 2,
        name: 'Homepage',
        href: '/dashboard/desktop-homepage',
        code: 'money_site_setting'
      },
      {
        id: 3,
        name: 'Button',
        href: '/dashboard/desktop-button',
        code: 'money_site_setting'
      },
      {
        id: 4,
        name: 'Sidebar',
        href: '/dashboard/desktop-sidebar',
        code: 'money_site_setting'
      },
      {
        id: 5,
        name: 'Other Page',
        href: '/dashboard/desktop-otherpage',
        code: 'money_site_setting'
      },
      {
        id: 6,
        name: 'Pop Up',
        href: '/dashboard/desktop-popup',
        code: 'money_site_setting'
      }
    ]
  },
  {
    id: 17,
    name: 'Game Management',
    icon: GameManagementIcon,
    subs: [
      {
        id: 1,
        name: 'Game List',
        href: '/dashboard/game-list',
        code: 'game_management'
      },
      {
        id: 2,
        name: 'Provider List',
        href: '/dashboard/provider-list',
        code: 'game_management'
      },
      {
        id: 3,
        name: 'Provider Group',
        href: '/dashboard/provider-group',
        code: 'game_management'
      }
    ]
  }
]
