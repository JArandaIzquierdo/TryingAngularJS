angular.module("myApp", [])
    .controller('AlumnosController', function AlumnosController($scope){
    $scope.alumnos=[
        {nombre:"Antonio", edad: "7"},
        {nombre:"Juan", edad: "10"},
        {nombre:"Pepe", edad: "40"},
        {nombre:"Victor", edad: "22"},
        {nombre:"Alberto", edad: "24"}
    ];
});
