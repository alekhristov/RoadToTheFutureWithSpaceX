const container = (function () {
    $(document).ready(homeController.visualizeHomeController());
    const database = databaseFunc();

    return {
        database
    };
}())

