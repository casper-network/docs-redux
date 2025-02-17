const cfgPath = ".env";
import dotenv from 'dotenv';
dotenv.config({ path: cfgPath });

const docsOnlyMode = process.env.DOCS_MODE === "true";
const routePrefix = process.env.ROUTE_PREFIX;
const projectName = process.env.PROJECT_NAME;
const url = process.env.URL;
const baseUrl = process.env.BASE_URL;
const isLocal = process.env.LOCAL === "true";
const githubOrganizationName = process.env.GITHUB_ORGANIZATION_NAME;
const githubProjectName = process.env.GITHUB_PROJECT_NAME;
const githubDeploymentBranch = process.env.GITHUB_DEPLOYMENT_BRANCH;

export let envConfig = {
    cfgPath : cfgPath,
    docsOnlyMode: docsOnlyMode,
    routePrefix: routePrefix,
    projectName : projectName,
    siteUrl: url,
    baseUrl: baseUrl,
    isLocal: isLocal,
    githubOrganizationName: githubOrganizationName,
    githubProjectName: githubProjectName,
    githubDeploymentBranch: githubDeploymentBranch
};