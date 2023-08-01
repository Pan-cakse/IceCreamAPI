import VCLightRouter from "vclight-router";

const router = new VCLightRouter({
    buildInRouters: {
        _404: false
    }
});
export default router;

//api v2 routers
import "./api/v2/projects/project"
import "./api/404";
import "./api/v2/api"
import "./api/v2/docs"
import "./api/v2/projects";
import "./api/v2/commit/build";

//common routers
import "./common/index";
import "./common/favicon";

