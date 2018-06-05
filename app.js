var app = angular.module("pathfinderBuilder", ['dndLists']);

app.controller("characterSheet", function ($scope, CharacterObject) {
    $scope.character = CharacterObject;
    $scope.classes = new Array(20);
});

app.controller("characterSkillChecks", function ($scope, CharacterObject) {
    $scope.character = CharacterObject;
    $scope.skillchecks = new Array(20);
});

app.controller("characterAbilities", function ($scope, CharacterObject) {
    $scope.character = CharacterObject;
    $scope.models = {
        selected: null,
        lists: {
            "feats": {
                allowedTypes: ['feat'],
                data: []
            },

            "selectedFeats": {
                allowedTypes: ['feat'],
                data: []
            },
            "traits": {
                allowedTypes: ['trait'],
                data: []
            },
            "selectedTraits": {
                allowedTypes: ['trait'],
                data: []
            },
            "drawbacks": {
                allowedTypes: ['drawback'],
                data: []
            },
            "selectedDrawbacks": {
                allowedTypes: ['drawback'],
                data: []
            }
        }
    };

    for (var i = 1; i <= 10; ++i) {
        $scope.models.lists.feats.data.push({
            label: "Feat" + i,
            type: "feat"
        });
    }

    for (i = 1; i <= 10; ++i) {
        $scope.models.lists.traits.data.push({
            label: "Trait" + i,
            type: "trait"
        });
    }

    for (i = 1; i <= 10; ++i) {
        $scope.models.lists.drawbacks.data.push({
            label: "Drawback" + i,
            type: "drawback"
        });
    }
});

app.factory('CharacterObject', function () {

    return {
        name: "Vincent",
        abilities: {
            feats: []
        }

    };
});
