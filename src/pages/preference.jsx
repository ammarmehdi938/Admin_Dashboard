import { Box } from "@mui/material";
import WithLayout from "../components/layout";
import SettingHeader from "../components/PreferenceComponent/settingHeader";
import ProfileInformation from "../components/PreferenceComponent/profileInformation";
const Preference = () => {
  return (
    <Box sx={{ ml: "50px" 
      
    }}>
      <Box sx={{ mt: "50px" }}>
        <SettingHeader />
      </Box>
      <Box sx={{ mt: "50px" }}>
        <ProfileInformation />
      </Box>
    </Box>
  );
};
export default WithLayout(Preference);
