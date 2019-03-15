// declare your functions here...
function paragraphSelector()
{
  return $('p');
}

function lastImageSelector()
{
  return $('img:last');
}

function ninjaBabySelector()
{
  return $('#baby-ninja');
}

function divSelector()
{
  var d = [];
  d.push($('div:first'));
  d.push($('div:last'));
  //return [$('div:first') , $('div:last')];
}