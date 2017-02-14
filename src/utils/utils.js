/**
 * Created by liqingyang on 2017/2/13.
 */
export default {
    version: '1.0.0',
    isImage (filename) {
        if(!filename) return false;
        return /\.(jpg|jpeg|png|gif|bmp)$/.test(filename);
    }
}