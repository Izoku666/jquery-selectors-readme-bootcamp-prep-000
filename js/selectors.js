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
  const a = $('div');
  return [a[0] , a[1]];
  //return [$('div:first') , $('div:last')];
}

function firstListItem()
{
  //return $('ul li')[0];
}