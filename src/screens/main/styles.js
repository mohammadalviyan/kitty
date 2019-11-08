const styles = {
    container: {
        flex: 1,
    },
    //------------------header---------------//
    header: {
        backgroundColor: '#ffffff', 
        flex: 1
    },
    headercontainer: {
        marginHorizontal: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 30,
    },
    headercontentcart: {
        paddingHorizontal: 3,
        width: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headercontentcart: {
        paddingHorizontal: 3,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentsearch: {
        borderWidth: 3,
        borderColor: '#E8E8E8',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        height: 45,
        fontSize: 15,
        paddingLeft: 45,
        paddingRight: 20,
    },
    contentsearching: {
        position: 'absolute',
        top: 11,
        left: 12,
    },
    headercart: {
        width: 50, 
        height: 50,
        position: 'absolute'
    },
    //------------------tab bar--------------//
    tabbar: {
        height: 54, 
        flexDirection: 'row', 
        backgroundColor: '#ffffff'
    },
    tabbarcontainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    tabbarimage: {
        width: 26, 
        height: 26
    },
    tabbartitle: {
        fontSize: 10, 
        color: '#545454', 
        marginTop: 4
    },
    //--------------content-----------------//
}
export default styles;