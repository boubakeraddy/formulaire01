# C12 : Développer en Front-end

## S10 : Créer des formulaires

### Composants contrôlés

En HTML, les éléments de formulaire tels que <input>, <textarea>, et <select> maintiennent généralement leur propre état et se mettent à jour par rapport aux saisies de l’utilisateur. En React, l’état modifiable est généralement stocké dans la propriété state des composants et mis à jour uniquement avec setState().
On peut combiner ces deux concepts en utilisant l’état local React comme « source unique de vérité ». Ainsi le composant React qui affiche le formulaire contrôle aussi son comportement par rapport aux saisies de l’utilisateur. Un champ de formulaire dont l’état est contrôlé de cette façon par React est appelé un « composant contrôlé ».
