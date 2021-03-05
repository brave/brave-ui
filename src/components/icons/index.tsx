import styled, { AnyStyledComponent } from 'styled-components'
// rotated imports
import ArrowIcon from './arrow'
import CaratIcon from './carat'
import CaratCircleOIcon from './carat-circle-o'
import CaratCircleIcon from './carat-circle'
import CaratStrongIcon from './carat-strong'

// rotated variants
function RotatedIconComponent (
  iconComponent: AnyStyledComponent,
  degrees: number
) {
  return styled(iconComponent)`
    transform: rotate(${degrees}deg);
  `
}

// simple
export { default as AlertCircleIcon } from './alert-circle'
export { default as AlertMessageIcon } from './alert-message-o'
export const ArrowLeftIcon = RotatedIconComponent(ArrowIcon, 0)
export const ArrowRightIcon = RotatedIconComponent(ArrowIcon, 180)
export const ArrowDownIcon = RotatedIconComponent(ArrowIcon, -90)
export const ArrowUpIcon = RotatedIconComponent(ArrowIcon, 90)
export { default as BookmarkBook } from './bookmarkBook'
export { default as BookmarkIcon } from './bookmark'
export { default as BookmarkOIcon } from './bookmark-o'
export const CaratCircleOUpIcon = RotatedIconComponent(CaratCircleOIcon, 0)
export const CaratCircleODownIcon = RotatedIconComponent(CaratCircleOIcon, 180)
export const CaratCircleORightIcon = RotatedIconComponent(CaratCircleOIcon, 90)
export const CaratCircleOLeftIcon = RotatedIconComponent(CaratCircleOIcon, -90)
export const CaratCircleUpIcon = RotatedIconComponent(CaratCircleIcon, 0)
export const CaratCircleDownIcon = RotatedIconComponent(CaratCircleIcon, 180)
export const CaratCircleRightIcon = RotatedIconComponent(CaratCircleIcon, 90)
export const CaratCircleLeftIcon = RotatedIconComponent(CaratCircleIcon, -90)
export const CaratRightIcon = RotatedIconComponent(CaratIcon, 180)
export const CaratLeftIcon = RotatedIconComponent(CaratIcon, 0)
export const CaratUpIcon = RotatedIconComponent(CaratIcon, 90)
export const CaratDownIcon = RotatedIconComponent(CaratIcon, -90)
export const CaratStrongRightIcon = RotatedIconComponent(CaratStrongIcon, -90)
export const CaratStrongLeftIcon = RotatedIconComponent(CaratStrongIcon, 90)
export const CaratStrongUpIcon = RotatedIconComponent(CaratStrongIcon, 180)
export const CaratStrongDownIcon = RotatedIconComponent(CaratStrongIcon, 0)
export { default as CheckCircleIcon } from './check-circle'
export { default as CheckIcon } from './check'
export { default as CheckmarkCircleL } from './checkmark-circle-l'
export { default as CheckmarkCircleS } from './checkmark-circle-s'
export { default as CheckmarkCircleR } from './checkmark-circle-r'
export { default as ClipboardOIcon } from './clipboard-o'
export { default as CloseCircleOIcon } from './close-circle-o'
export { default as CloseCircleIcon } from './close-circle'
export { default as CloseStrokeIcon } from './close'
export { default as CreditCardIcon } from './credit-card'
export { default as DownloadIcon } from './download'
export { default as EditOIcon } from './edit-o'
export { default as EmbedOIcon } from './embed-o'
export { default as EmoteSadIcon } from './emote-sad'
export { default as EmoteSmileIcon } from './emote-smile'
export { default as GraphOIcon } from './graph-o'
export { default as HistoryIcon } from './history'
export { default as LogoYoutubeIcon } from './logo-youtube'
export { default as LogoTwitterIcon } from './logo-twitter'
export { default as LogoFacebookIcon } from './logo-facebook'
export { default as OpenNewIcon } from './open-new'
export { default as PaymentDueIcon } from './payment-due'
export { default as PinOIcon } from './pin-o'
export { default as PinIcon } from './pin'
export { default as PlusIcon } from './plus'
export { default as PrintIcon } from './print'
export { default as RefreshIcon } from './refresh'
export { default as SendIcon } from './send'
export { default as SettingsAdvancedIcon } from './settings-advanced'
export { default as SettingsIcon } from './settings'
export { default as ShieldAlertIcon } from './shield-alert'
export { default as ShieldAlertOIcon } from './shield-alert-o'
export { default as TrashOIcon } from './trash-o'
export { default as TrashIcon } from './trash'
export { default as ThumbsUpIcon } from './thumbs-up'
export { default as UpholdSystemIcon } from './logo-uphold'
export { default as UnVerifiedSIcon } from './unverified-s'
export { default as VerifiedSIcon } from './verified-s'
export { default as WalletInfoIcon } from './wallet-info'
export { default as WalletAddIcon } from './wallet-add'
export { default as WalletBackupIcon } from './wallet-backup'
export { default as WalletBlockIcon } from './wallet-block'
export { default as WalletCloseIcon } from './wallet-close'
export { default as WalletCheckIcon } from './wallet-check'
export { default as WalletImportIcon } from './wallet-import'
export { default as WalletLockIcon } from './wallet-lock'
export { default as WalletManageIcon } from './wallet-manage'
export { default as WalletMinusIcon } from './wallet-minus'
export { default as WalletOpenIcon } from './wallet-open'
export { default as WalletWithdrawIcon } from './wallet-withdraw'
// V2 Naming Convention
export { default as BlockSIcon } from './block-s'
export { default as BlockLIcon } from './block-l'
export { default as BlockRIcon } from './block-r'
export { default as CaratTriangleDownSIcon } from './carat-triangle-down-s'
export { default as CaratTriangleDownLIcon } from './carat-triangle-down-l'
export { default as CaratTriangleDownRIcon } from './carat-triangle-down-r'
export { default as CaratTriangleLeftSIcon } from './carat-triangle-left-s'
export { default as CaratTriangleLeftLIcon } from './carat-triangle-left-l'
export { default as CaratTriangleLeftRIcon } from './carat-triangle-left-r'
export { default as CaratTriangleRightSIcon } from './carat-triangle-right-s'
export { default as CaratTriangleRightLIcon } from './carat-triangle-right-l'
export { default as CaratTriangleRightRIcon } from './carat-triangle-right-r'
export { default as CaratTriangleUpSIcon } from './carat-triangle-up-s'
export { default as CaratTriangleUpLIcon } from './carat-triangle-up-l'
export { default as CaratTriangleUpRIcon } from './carat-triangle-up-r'
export { default as HeartSIcon } from './heart-s'
export { default as HeartLIcon } from './heart-l'
export { default as HeartRIcon } from './heart-r'
export { default as MoreVertSIcon } from './more-vert-s'
export { default as MoreVertLIcon } from './more-vert-l'
export { default as MoreVertRIcon } from './more-vert-r'
export { default as ThumbsdownSIcon } from './thumbsdown-s'
export { default as ThumbsdownLIcon } from './thumbsdown-l'
export { default as ThumbsdownRIcon } from './thumbsdown-r'
export { default as ThumbsupSIcon } from './thumbsup-s'
export { default as ThumbsupLIcon } from './thumbsup-l'
export { default as ThumbsupRIcon } from './thumbsup-r'

// complex, do not autogenerate
// TODO(petemill): Should have separate process for logos
export { default as AdsMegaphoneIcon } from './fc-ads-megaphone'
export { default as AdsTokensIcon } from './fc-ads-tokens'
export { default as AutoContributeIcon } from './fc-auto-contribute'
export { default as LoaderIcon } from './loader'
export { default as MonthlyContributionsIcon } from './fc-monthly-contributions'
export { default as PaperAirplaneIcon } from './paper-airplane'
export { default as RewardsActivateIcon } from './fc-rewards-activate'
export { default as RewardsCheckIcon } from './fc-rewards-check'
export { default as RewardsSendTipsIcon } from './fc-rewards-send-tips'
export { default as RewardsWalletCheck } from './fc-rewards-wallet-check'
export { default as TipsIcon } from './fc-tips'
export { default as TorLockIcon } from './tor-lock'
// Logos
export { default as AmazonColorIcon } from './fc-logo-amazon'
export { default as BatColorIcon } from './fc-logo-bat'
export { default as BatGreyIcon } from './fc-logo-bat-grey'
export { default as BitcoinColorIcon } from './fc-logo-bitcoin'
export { default as BloggerColorIcon } from './fc-logo-blogger'
export { default as DuckDuckGoIcon } from './fc-logo-ddg'
export { default as EbayColorIcon } from './fc-logo-ebay'
export { default as EthereumColorIcon } from './fc-logo-ethereum'
export { default as FacebookColorIcon } from './fc-logo-facebook'
export { default as GitHubColorIcon } from './fc-logo-github'
export { default as MediumColorIcon } from './fc-logo-medium'
export { default as LinkedInColorIcon } from './fc-logo-linkedin'
export { default as LitecoinColorIcon } from './fc-logo-litecoin'
export { default as RedditColorIcon } from './fc-logo-reddit'
export { default as SoundCloudColorIcon } from './fc-logo-soundcloud'
export { default as StackOverflowColorIcon } from './fc-logo-stack-overflow'
export { default as TwitchColorIcon } from './fc-logo-twitch'
export { default as TwitterColorIcon } from './fc-logo-twitter'
export { default as UpholdColorIcon } from './fc-logo-uphold'
export { default as UnsplashColorIcon } from './fc-logo-unsplash'
export { default as VimeoColorIcon } from './fc-logo-vimeo'
export { default as WikipediaColorIcon } from './fc-logo-wikipedia'
export { default as YoutubeColorIcon } from './fc-logo-youtube'

// illustrative
export { default as GiftIcon } from './illustrative/gift'
export { default as LoveIcon } from './illustrative/love'
export { default as MegaphoneIcon } from './illustrative/megaphone'
