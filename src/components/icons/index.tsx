import styled, { StyledComponentClass } from 'styled-components'

// simple
export { default as AlertCircleIcon } from './alert-circle'
export { default as ArrowIcon } from './arrow'
export { default as CaratIcon } from './carat'
export { default as CheckCircleIcon } from './check-circle'
export { default as CheckIcon } from './check'
export { default as CloseCircleIcon } from './close-circle'
export { default as CloseStrokeIcon } from './close-stroke'
export { default as DownloadIcon } from './download'
export { default as EmoteSadIcon } from './emote-sad'
export { default as EmoteSmileIcon } from './emote-smile'
export { default as GiftIcon } from './illustrative/gift'
export { default as LogoYoutubeIcon } from './logo-youtube'
export { default as LoveIcon } from './illustrative/love'
export { default as MegaphoneIcon } from './illustrative/megaphone'
export { default as PaymentDueIcon } from './payment-due'
export { default as PrintIcon } from './print'
export { default as RefreshIcon } from './refresh'
export { default as SendIcon } from './send'
export { default as SettingsAdvancedIcon } from './settings-advanced'
export { default as SettingsIcon } from './settings'
export { default as ThumbsUpIcon } from './thumbs-up'
export { default as UpholdSystemIcon } from './uphold-system'
export { default as VerifiedFillIcon } from './verified-fill'
export { default as VerifiedIcon } from './verified'
export { default as WalletActivityIcon } from './wallet-activity'
export { default as WalletAddIcon } from './wallet-add'
export { default as WalletBackupIcon } from './wallet-backup'
export { default as WalletImportIcon } from './wallet-import'
export { default as WalletManageIcon } from './wallet-manage'
export { default as WalletWithdrawIcon } from './wallet-withdraw'

// complex, do not autogenerate
// TODO(petemill): Should have separate process for logos
export { default as BatColorIcon } from './bat-color'
export { default as BatGreyIcon } from './bat-grey'
export { default as UpholdColorIcon } from './uphold-color'
export { default as YoutubeColorIcon } from './youtube'
export { default as TwitchColorIcon } from './twitch'
export { default as LitecoinColorIcon } from './litecoin'
export { default as TwitterColorIcon } from './twitter'
export { default as EthereumColorIcon } from './ethereum'
export { default as BitcoinColorIcon } from './bitcoin'

// rotated variants
function RotatedIconComponent (iconComponent: StyledComponentClass<any, any>, degrees: number) {
  return styled(iconComponent)`
    transform: rotate(${degrees}deg);
  `
}
import ArrowIcon from './arrow'
export const ArrowRightIcon = RotatedIconComponent(ArrowIcon, 180)
export const ArrowDownIcon = RotatedIconComponent(ArrowIcon, -90)
export const ArrowUpIcon = RotatedIconComponent(ArrowIcon, 90)
import CaratIcon from './carat'
export const CaratRightIcon = RotatedIconComponent(CaratIcon, -90)
export const CaratLeftIcon = RotatedIconComponent(CaratIcon, 90)
export const CaratUpIcon = RotatedIconComponent(CaratIcon, 180)
export const CaratDownIcon = CaratIcon
import ThumbsUpIcon from './thumbs-up'
export const ThumbsDownIcom = styled(ThumbsUpIcon)`
  transform: scaleY(-1);
`
