import {
  StyleDeleteIcon,
  StyleAdProductIcon,
  StyleBusinessIcon,
  StyleCalculatorIcon,
  StyleCalendarIcon,
  StyleRingIcon,
  StylePercentageIcon,
  StyleRankingIcon,
  StyleUploadIcon,
  StyleClothesShortSleeveIcon,
  StyleRulerIcon,
  StyleCoatHangerIcon,
  StyleFiledateIcon,
  StyleInfoIcon,
  StyleSystemIcon,
  StyleViewListIcon,
  StyleTruckIcon,
  StyleShopIcon,
  StyleHighHeeledShoesIcon,
  StyleNecktieIcon,
  StyleWriteIcon,
  StyleDownloadIcon,
  StyleFilterIcon,
  StyleFilterAltIcon,
} from "@parte-ds/icons";
import { Box } from "@parte-ds/ui";

const NewIcons = () => {
  return (
    <Box display="flex" flexDirection="column" gap={16}>
      <Box display="flex" gap={16} alignItems="center">
        <StyleRingIcon />
        <StyleCalendarIcon />
      </Box>
      <Box display="flex" gap={16} alignItems="center">
        <StylePercentageIcon />
        <StyleRankingIcon />
        <StyleUploadIcon />
        <StyleClothesShortSleeveIcon />
        <StyleRulerIcon />
        <StyleCoatHangerIcon />
        <StyleHighHeeledShoesIcon />
        <StyleNecktieIcon />
      </Box>
      <Box display="flex" gap={16} alignItems="center">
        <StyleDeleteIcon />
        <StyleFiledateIcon />
        <StyleInfoIcon />
      </Box>
      <Box display="flex" gap={16} alignItems="center">
        <StyleSystemIcon />
        <StyleViewListIcon />
        <StyleTruckIcon />
        <StyleAdProductIcon />
        <StyleShopIcon />
        <StyleCalculatorIcon />
        <StyleBusinessIcon />
      </Box>
      <Box display="flex" gap={16} alignItems="center">
        <StyleWriteIcon />
        <StyleDownloadIcon />
        <StyleFilterIcon />
        <StyleFilterAltIcon />
      </Box>
    </Box>
  );
};
export default NewIcons;
