const screenCaptureAuthority = (function(landscape) {
    function _screenCaptureAuthority(landscape) {
        this.landscape = landscape || false
        this.state = false
        this.getPermissionInfo = function() {
            return this.state
        }
        this.setPermissionInfo = function() {
            if (this.state == false) {
                this.state = images.requestScreenCapture(this.landscape)
            }
        }
    }
    return function() {
        if (!_screenCaptureAuthority.instance) {
            _screenCaptureAuthority.instance = new _screenCaptureAuthority()
        }
        return _screenCaptureAuthority.instance
    }
})()
const sca = new screenCaptureAuthority()


function ADBShellAuthority() {
    var isAdb = $shell.checkAccess("adb");
    if (!isAdb) {
        alert("请先使用Shizuku授权,再运行");
        exit();
    }
    $shell.setDefaultOptions({
        adb: true
    }); //将shell切换到adb模式 
}
//*
module.exports = {
    screenCaptureAuthority: screenCaptureAuthority,
    ADBShellAuthority: ADBShellAuthority
};
//*/
