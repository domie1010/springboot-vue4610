const base = {
    get() {
        return {
            url : "http://localhost:8080/jkyymenzhanzaixiangh/",
            name: "jkyymenzhanzaixiangh",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/jkyymenzhanzaixiangh/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "健康医院门诊在线挂号系统"
        } 
    }
}
export default base
