/*
=CONCATENATE("<li class='tile ",A2," ",H2,'>
'odyssey base': { group: 'base glazes', firing: 'Cone 6', notes: 'Clear gloss', sourceTitle: '', source: 'http://ceramicartsdaily.org', ingredients: `40 flint
24 nepheline syenite
12 calcium borate frit
11 dolomite
7 china clay
4 whiting
2 zinc oxide
2 bentonite` },
=CONCATENATE('",B2,': { group: '",A2,', firing: '",C2,', notes: `",G2,"`, sourceTitle: '",E2,', source: '",F2,', ingredients: `",D2,"` },)
*/

var emtpyRecipe = { group: '-', location: '-', notes: `-`, sourceTitle: '-', source: '', ingredients: `` };

var recipes = {

  'great grandparents': { name: 'great grandparents', group: 'base glazes', location: 'Mike Miller home', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'newspaper clipping': { name: 'newspaper clipping', group: 'base glazes', location: 'Mike Miller home', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'fig newtons tin': { name:'fig newtons tin', group: 'base glazes', location: 'cone 6 ', notes: `Tin box collection by Linda Miller`, sourceTitle: 'Sankey Glaze Database', source: '', ingredients: `` },
  'weekly flowers': { name: 'weekly flowers', group: 'base glazes', location: '', notes: `Weekly flowers given to Linda Miller by Mike Miller, every week for about the past 10 years.`, sourceTitle: '', source: '', ingredients: `` },
  'love letter': { name: 'love letter', group: 'base glazes', location: '', notes: `A hand written letter, one of many, written from Mike Miller and sent to Linda Miller.`, sourceTitle: '', source: '', ingredients: `` },
  'camen islands brochure': { name: 'camen islands brochure', group: 'base glazes', location: '', notes: `A brochure to the location that the Millers vacation at each year.`, sourceTitle: '', source: '', ingredients: `` },
  'dreidel collection': { group: 'dreidel collection', location: 'cone 04 ', notes: `A few of the dreiedels in the collection. Many people give this as a gift and so the collection is ever growing.`, sourceTitle: '', source: '', ingredients: `` },
  'congratulations card': { name:'congratulations card', group: 'base glazes', location: 'cone 04 ', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'banking advertisement': { name:'banking advertisement', group: 'base glazes', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'high alkali clear gloss': { name:'high alkali', group: 'base glazes', location: 'cone 5', notes: `clear gloss <br>may run`, sourceTitle: '', source: '', ingredients: `` },
  'alberta slip base': { group: 'base glazes', location: 'cone 6', notes: `add 1,2,3,4,5 rutile
  try on red, white, buff clays
  may run`, sourceTitle: '', source: '', ingredients: `80	alberta slip
  20	ferro frit 3134` },
  'maria blue': { group: 'rutile', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'blue hare': { group: 'rutile', location: '', notes: `firing range cones 5-6`, sourceTitle: '', source: '', ingredients: `` },
  'behrens pearl white': { group: 'rutile', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'old leather gloss': { group: 'rutile', location: '', notes: `firing range cones 7-9`, sourceTitle: '', source: '', ingredients: `` },
  'pike orange': { group: 'rutile', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'satin cream yellow': { group: 'rutile', location: 'cone 9', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  "hal's pale apple": { group: 'rutile', location: 'cone 6 ', notes: `reduction or oxidation`, sourceTitle: '', source: '', ingredients: `` },
  'zamek floating blue': { group: 'rutile', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'wolff light blue': { group: 'rutile', location: 'cone 6', notes: `Chris Wolff`, sourceTitle: '', source: '', ingredients: `` },
  'reduction phila green': { group: 'rutile', location: 'cone 9 reduction', notes: `talc instead of lithium = more purple`, sourceTitle: '', source: '', ingredients: `` },
  'colemanite floating blue': { group: 'rutile', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'j8 yellow': { group: 'rutile', location: '', notes: `firing range cones 6-8`, sourceTitle: '', source: '', ingredients: `` },
  'dry pumpkin yellow': { group: 'rutile', location: 'cone 6, cool to 1100c then soak 1hr', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'butter yellow': { group: 'rutile', location: '', notes: `firing range cones 6-7`, sourceTitle: '', source: '', ingredients: `` },
  'triins rutile yellow': { group: 'rutile', location: '', notes: `firing range cones 6-8
  for speckle add
  granular ilmenite`, sourceTitle: '', source: '', ingredients: `` },
  'matte pale pink': { group: 'rutile', location: 'cone 9', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'wolff light blue over wolff plum': { group: 'rutile', location: '', notes: `Chris Wolff - dip one after the other, one firing`, sourceTitle: '', source: '', ingredients: `` },
  'tenmoku': { group: 'Iron', location: 'cone 9 reduction', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'krakowski noah port': { group: 'Iron', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'marsala': { group: 'Iron', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'gibby wild rose': { group: 'Iron', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'wolff cream over plum': { group: 'Iron', location: 'cone 6', notes: `dip one after the other, one firing`, sourceTitle: '', source: '', ingredients: `` },
  'leopard oilspot': { group: 'Iron', location: 'firing range cones 7-9', notes: `layer one glaze over the other, one firing`, sourceTitle: '', source: '', ingredients: `` },
  'leopard oilspot (blue)': { name: 'leopart oilspot', group: 'Iron', location: 'firing range cones 7-9', notes: `layer one glaze over the other, one firing`, sourceTitle: '', source: '', ingredients: `` },
  'leopard oilspot (green)': { name: 'leopart oilspot', group: 'Iron', location: 'firing range cones 7-9', notes: `layer one glaze over the other, one firing

  overglaze
   + 4 copper carbonate
  makes green leopard`, sourceTitle: '', source: '', ingredients: `` },
  'tenmoku gold': { group: 'Iron', location: 'cone 9 reduction', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'metallic brown': { group: 'Iron', location: 'cone 8 then refired cone 04', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  "bailey's oilspot": { group: 'Iron', location: 'cone 9 reduction', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  "s": { group: 'Iron', location: 'cone 8', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'honey gold fake ash': { group: 'Iron', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'brown persimon': { group: 'Iron', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `t` },
  "'cream breaking red'": { group: 'Iron', location: 'cone 6', notes: `did not break to red.`, sourceTitle: '', source: '', ingredients: `` },
  'peach black tenmoku': { group: 'Iron', location: 'cone 9 reduction', notes: ``, sourceTitle: '', source: 'g', ingredients: `` },
  'shino': { group: 'Iron', location: 'cone 9 reduction shino firing, reduce heavily from 850c-1150c', notes: `added 2.5 red iron oxide`, sourceTitle: '', source: '', ingredients: `` },
  'craigen seaweed': { group: 'Iron', location: 'cone 9 reduction', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'goldfish oilspot': { group: 'Iron', location: 'firing range cones 7-9', notes: `layer one glaze over the other, one firing`, sourceTitle: '', source: '', ingredients: `` },
  'goldfish oilspot (blue)': { name:'goldfish oilspot', group: 'Iron', location: 'firing range cones 7-9', notes: `layer one glaze over the other, one firing`, sourceTitle: '', source: '', ingredients: `` },
  'cornelius shino': { group: 'Iron', location: 'cone 9 reduction shino firing, reduce heavily from 850c-1150c', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  "john's oilspot": { group: 'Iron', location: 'cone 8', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'krakowski little alex porter': { group: 'Iron', location: 'cone 6 cool to 1100 soak 1 hr.', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'malcolm davis shino': { group: 'Iron', location: 'cone 9 reduction shino firing, reduce heavily from 850c-1150c', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'malcolm davis shino over alberta slip': { name: 'malcolm davis shino', group: 'Iron', location: 'cone 9 reduction shino firing, reduce heavily from 850c-1150c', notes: `over alberta slip`, sourceTitle: '', source: '', ingredients: `` },
  'red with black speckle': { group: 'Iron red glazes', location: 'firing range cones 6-9', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'berry rust': { group: 'Iron red glazes', location: '', notes: `cone 8 oxidation then refire cone 04 (red)
  or cone 9 reduction (dark brown, gold spots)`, sourceTitle: '', source: '', ingredients: `` },
  'persimmon': { group: 'Iron red glazes', location: 'cone 9 reduction then refire cone 04', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'sankey iron red2 thin': { group: 'Iron red glazes', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'baileys red': { group: 'Iron red glazes', location: 'cone 8 then refire cone 04', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'ptm multicoloured red': { group: 'Iron red glazes', location: 'cone 8 then refire cone 04', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'john posts tomato red': { group: 'Iron red glazes', location: 'cone 6 soak 30 mins. then hold 1000c 45 mins', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'harris tenmoku red': { group: 'Iron red glazes', location: 'cone 6 soak 30 mins. then hold 1000c 45 mins', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'davis red': { group: 'Iron red glazes', location: 'cone 07', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'readers digest red': { group: 'Iron red glazes', location: 'cone 6 soak 30 mins. then hold 1000c 45 mins', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'red orange': { group: 'Iron red glazes', location: 'cone 6 soak 15 mins. then hold 950c 1hr.', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'red orange thin': { name: 'red orange thin', group: 'Iron red glazes', location: 'cone 6 soak 15 mins. then hold 950c 1hr.', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'van gilders tenmoku': { group: 'Iron red glazes', location: 'cone 6 soak 30 mins. then hold 1000c 45 mins', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'baileys orange red': { group: 'Iron red glazes', location: 'cone 6 soak 20 mins. then hold 1035c 30 mins.', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'sankey iron red': { group: 'Iron red glazes', location: 'cone 6 soak 60 mins. then hold 950c 1hr.', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'coleman kaki': { group: 'Iron red glazes', location: 'cone 9 reduction slow cool', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'anderson ranch kaki': { group: 'Iron red glazes', location: 'cone 9 reduction slow cool', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'sankey iron red 2': { group: 'Iron red glazes', location: 'cone 6 then hold 950c 1hr ', notes: `like sankey iron red but with added talc`, sourceTitle: '', source: '', ingredients: `` },
  'krakowski ari sherry': { group: 'Iron yellows', location: 'cone 6 then hold 1100c 1hr', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'sharon golden ash': { group: 'Iron yellows', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'bailey orange': { group: 'Iron yellows', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'old gold albany': { group: 'Iron yellows', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'kamari yellow': { group: 'Iron yellows', location: 'cone 9', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'sun god': { group: 'Iron yellows', location: 'cone 9', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'marie woo yellow': { group: 'Iron yellows', location: 'cone 9', notes: `reduction or oxidation`, sourceTitle: '', source: '', ingredients: `` },
  'temple yellow': { group: 'Iron yellows', location: 'cone 9', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'ellen shankin fake ash': { group: 'Iron yellows', location: '', notes: `firing range cones 5-10`, sourceTitle: '', source: '', ingredients: `` },
  'vivid yellow': { group: 'Iron yellows', location: '', notes: `firing range cones 5-10
  spray thinly`, sourceTitle: '', source: '', ingredients: `` },
  'vivid yellow thin': { name:'vivid yellow', group: 'Iron yellows', location: '', notes: `firing range cones 5-10
  spray thinly`, sourceTitle: '', source: '', ingredients: `` },
  'pale yellow': { group: 'Iron yellows', location: 'cone 9 reduction', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'johns straw ash': { group: 'Iron yellows', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'glossy orange crystal': { group: 'Iron yellows', location: 'cone 9, 45 min soak', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'semi matte golden yellow': { group: 'Iron yellows', location: 'cone 9, 45 min soak', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'semi matte golden thick': { name: 'semi matte golden yellow', group: 'Iron yellows', location: 'cone 9, 45 min soak', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'semi matte golden thin': { name: 'semi matte golden yellow', group: 'Iron yellows', location: 'cone 9, 45 min soak', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'autumn yellow': { group: 'Iron yellows', location: 'cone 9 reduction', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'soda tan mauve': { group: 'Iron yellows', location: 'cone 9', notes: `thick mauve, thin tan`, sourceTitle: '', source: '', ingredients: `` },
  'david leach yellow celadon': { group: 'Iron yellows', location: 'cone 9', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'jens juicy fruit': { group: 'Iron yellows', location: 'cone 6', notes: `try partly over iron red glaze
  mix in warm water to dissolve
  soda ash`, sourceTitle: '', source: '', ingredients: `` },
  'jens juicy fruit over marsala': { name:'jens juicy fruit', group: 'Iron yellows', location: 'cone 6', notes: `try partly over iron red glaze
  mix in warm water to dissolve
  soda ash`, sourceTitle: '', source: '', ingredients: `` },
  'notebook woo yellow': { group: 'Iron yellows', location: 'cone 9', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'notebook woo yellow 3 red iron': { name:'notebook woo yellow', group: 'Iron yellows', location: 'cone 9', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'woo yellow new': { group: 'Iron yellows', location: 'cone 6', notes: `oxidation or reduction`, sourceTitle: '', source: '', ingredients: `` },
  'amber shaner celadon': { group: 'Iron blues', location: 'cone 9 reduction', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'ru celadon': { group: 'Iron blues', location: 'cone 9 reduction', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'ru celadon under reduced': { name: 'ru celadon', group: 'Iron blues', location: 'cone 9 reduction', notes: `under reduced`, sourceTitle: '', source: '', ingredients: `` },
  'pinell celadon revised': { group: 'Iron blues', location: 'cone 9 reduction', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'leach celadon': { group: 'Iron blues', location: 'cone 9 reduction', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'amber celadon': { group: 'Iron blues', location: 'cone 9 reduction', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'chun blue': { group: 'Iron blues', location: 'cone 9 reduction', notes: `dip in one after the other`, sourceTitle: '', source: '', ingredients: `` },
  'celadon': { group: 'Iron blues', location: 'cone 9 reduction', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'apple green celadon': { group: 'Iron blues', location: 'cone 9 reduction', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'celadon 2': { group: 'Iron blues', location: 'cone 9 reduction', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'choy blue': { group: 'Iron blues', location: 'cone 9 reduction', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'best blue': { group: 'Iron blues', location: 'cone 9 reduction', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'celadon liner': { group: 'Iron blues', location: 'cone 9 reduction', notes: ``, sourceTitle: '', source: 'g', ingredients: `` },
  'reduction blue': { group: 'Manganese', location: 'cone 9 reduction', notes: `reduce from 860c`, sourceTitle: '', source: '', ingredients: `` },
  'mottled blue/pink': { group: 'Manganese', location: 'cone 9', notes: `for more blue:
  mang diox 2
  co. carb 1
  RIO 2`, sourceTitle: '', source: '', ingredients: `` },
  'peachy': { group: 'Manganese', location: 'cone 9', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'aubergine': { group: 'Manganese', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'violet': { group: 'Manganese', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'amber honey': { group: 'Manganese', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'aventurine teadust': { group: 'Manganese', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  "'dark purple'": { group: 'Manganese', location: 'cone 04 soak 20 mins', notes: `This is not dark, maybe try 5 manganese dioxide and 1 cobalt oxide.`, sourceTitle: '', source: '', ingredients: `` },
  'cobalt manganese purple matte': { group: 'Manganese', location: 'cone 8', notes: `not matte`, sourceTitle: '', source: '', ingredients: `` },
  'clear matte golden': { group: 'Manganese', location: 'cone 9', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'magnesium matte violet blue': { group: 'Manganese', location: 'cone 8', notes: `firing range cones 6-8`, sourceTitle: '', source: '', ingredients: `` },
  'soda porcelain pale purple-blue runny': { name: 'soda porcelain pale purple-blue' ,group: 'Manganese', location: '', notes: `firing range cones 6-8`, sourceTitle: '', source: '', ingredients: `` },
  'soda porcelain pale purple-blue': { name: 'soda porcelain pale purple-blue' ,group: 'Manganese', location: '', notes: `firing range cones 6-8`, sourceTitle: '', source: '', ingredients: `` },
  'manganese mauve': { group: 'Manganese', location: 'cone 5', notes: `oxidation or reduction`, sourceTitle: '', source: '', ingredients: `` },
  'manganese mauve purple': { group: 'Manganese', location: 'cone 9', notes: `oxidation or reduction`, sourceTitle: '', source: '', ingredients: `` },
  'emily purple': { group: 'Cobalt', location: '', notes: `cone 8 oxidation or cone 9 reduction`, sourceTitle: '', source: '', ingredients: `` },
  'Bow Scan': { group: 'Cobalt', location: '', notes: ``, sourceTitle: '', source: 'Mike Miller', ingredients: `` },
  'rita chivonnes periwinkle': { group: 'Cobalt', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'army green': { group: 'Cobalt', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'pike satin purple': { group: 'Cobalt', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'lego blue': { group: 'Cobalt', location: 'cone 8', notes: ``, sourceTitle: '', source: 'p150', ingredients: `` },
  'grey speckled cobalt': { group: 'Cobalt', location: 'cone 8', notes: `for darker greys try also :
  cobalt carbonate 0.2, 0.5
  chrome oxide 0.3, 0.4`, sourceTitle: '', source: '', ingredients: `` },
  'blue bead glaze': { group: 'Cobalt', location: 'cone 04', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'blue monkey': { group: 'Cobalt', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'baldwin blue': { group: 'Cobalt', location: '', notes: `firing range cones 7-8`, sourceTitle: '', source: '', ingredients: `` },
  'willett cobalt green': { group: 'Cobalt', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'cobalt green with yellow crystals': { group: 'Cobalt', location: '1270c soak one hour', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'denim blue': { group: 'Cobalt', location: 'cone 6', notes: `without copper carb = more blue
  without titanium diox. = more grey`, sourceTitle: '', source: '', ingredients: `` },
  'lana purple': { group: 'Cobalt', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'raspberry blue': { group: 'Cobalt', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'peacock blue revised': { group: 'Cobalt', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'dolita navy': { group: 'Cobalt', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'mayan blue': { group: 'Cobalt', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'grape': { group: 'Cobalt', location: 'cone 8', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'stoneware blue': { group: 'Cobalt', location: 'cone 8', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'benzie lichen': { group: 'Cobalt', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'good blue lichen': { group: 'Cobalt', location: '', notes: `firing range cones 5-6`, sourceTitle: '', source: '', ingredients: `` },
  'grey green blue super matte': { group: 'Cobalt', location: '1270c soak 1 hr', notes: `thin/medium/thick =
  grey/green/blue`, sourceTitle: '', source: '', ingredients: `` },
  'turners purple': { group: 'Cobalt', location: 'cone 9 reduction', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'magnesium matte lavender blue': { group: 'Cobalt', location: 'cone 9 reduction', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'soda porc. rutile-tin-cobalt': { group: 'Cobalt', location: '', notes: `firing range cones 6-8`, sourceTitle: '', source: '', ingredients: `` },
  'lv baby blue': { group: 'Cobalt', location: 'cone 5', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'magnesium matte purple grey': { group: 'Cobalt', location: 'cone 9 reduction', notes: `The speckles you see are due to the grogged clay underneath and not part of the glaze.`, sourceTitle: '', source: '', ingredients: `` },
  'fake ash blue': { group: 'Cobalt', location: 'firing range cones 5-6', notes: `spray thin only`, sourceTitle: '', source: '', ingredients: `` },
  'fake ash blue sprayed thinly': { name:'fake ash blue', group: 'Cobalt', location: 'firing range cones 5-6', notes: `sprayed thinly`, sourceTitle: '', source: '', ingredients: `` },
  'baldwin green': { group: 'Copper', location: '', notes: `firing range cones 7-8`, sourceTitle: '', source: '', ingredients: `` },
  'oribe no.9 over black slip stripe': { group: 'Copper', location: 'cone 9 reduction', notes: `try over black/white slip`, sourceTitle: '', source: '', ingredients: `` },
  'oribe no.4': { group: 'Copper', location: 'cone 9 reduction', notes: `try over black/white slip`, sourceTitle: '', source: '', ingredients: `` },
  'shaner oribe over black slip stripe': { group: 'Copper', location: 'reduction cone 9', notes: `try over black/white slip
  try woodfire`, sourceTitle: '', source: '', ingredients: `` },
  'shaner oribe': { group: 'Copper', location: 'reduction cone 9', notes: `try over black/white slip
  try woodfire`, sourceTitle: '', source: '', ingredients: `` },
  'xavier jade green': { group: 'Copper', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'iguana green': { group: 'Copper', location: 'cone 6', notes: `thin coat orange
  two coats bright green /turqu`, sourceTitle: '', source: '', ingredients: `` },
  'verdigris thin': { name: 'verdigris', group: 'Copper', location: 'cone 7-9', notes: `firing range cones 7-9`, sourceTitle: '', source: '', ingredients: `` },
  'verdigris': { group: 'Copper', location: 'cone 7-9', notes: `firing range cones 7-9`, sourceTitle: '', source: '', ingredients: `` },
  'yellow green': { group: 'Copper', location: 'cone 9', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'green speckled black': { group: 'Copper', location: '', notes: `firing range cones 7-9`, sourceTitle: '', source: '', ingredients: `` },
  'caribbean islands crystalline': { group: 'Copper', location: 'cone 6 crystal firing cool @ 50c/hr from 1100c to 800c', notes: `firing range cone 6-8`, sourceTitle: '', source: '', ingredients: `` },
  'glassy green': { group: 'Copper', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'goodrich honey green': { group: 'Copper', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'kemp soft green': { group: 'Copper', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'gartside peacock': { group: 'Copper', location: 'cone 6', notes: `also tried with 10 copper carb.`, sourceTitle: '', source: '', ingredients: `` },
  'dolita spearmint': { group: 'Copper', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'blue hawaii': { group: 'Copper', location: 'cone 9 reduction', notes: `also tried cone 6 crystal firing
  (cool @ 80c/hr from 1100c to 800c)`, sourceTitle: '', source: '', ingredients: `` },
  'crystal emerald': { group: 'Copper', location: 'cone 6 crystal firing (cool @ 80c/hr from 1100c to 800c)', notes: `try 0.5 cobalt carb. for blue`, sourceTitle: '', source: '', ingredients: `` },
  'leaf green': { group: 'Copper', location: 'cone 5-6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'greenish white crackle': { group: 'Copper', location: '1270c soak 1hr.', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'argyle green': { group: 'Copper', location: 'cone 5', notes: `thick/medium/thin <br>may run`, sourceTitle: '', source: '', ingredients: `` },
  'oribe sugar maples': { group: 'Copper', location: 'cone 9 reduction', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'oribe sugar maples over black slip stripe': { group: 'Copper', location: 'cone 9 reduction', notes: `try over white/black slip`, sourceTitle: '', source: '', ingredients: `` },
  'plum green': { group: 'Copper', location: 'cone 1270c 1hr soak', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'oribe over black slip stripe': { group: 'Copper', location: 'cone 9 reduction', notes: ``, sourceTitle: '', source: ``, ingredients: `` },
  'crystal green': { group: 'Copper', location: 'cone 6 crystal firing (cool @ 80C/hr from 1100c to 800c)', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'lewing sana green': { group: 'Copper turquoises', location: 'cone6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'karen starshine aqua': { group: 'Copper turquoises', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'turquoise matte': { group: 'Copper turquoises', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'shambhala turquoise aqua': { group: 'Copper turquoises', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'selsor turquoise': { group: 'Copper turquoises', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'satin matte turquoise': { group: 'Copper turquoises', location: '', notes: `firing range cones 7-9`, sourceTitle: 'k', source: '', ingredients: `` },
  'girls cyan': { group: 'Copper turquoises', location: '', notes: `firing range cones 6-8`, sourceTitle: '', source: '', ingredients: `` },
  'burke celadon turquoise': { group: 'Copper turquoises', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'chinese blue green': { group: 'Copper turquoises', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'buck sea green': { group: 'Copper turquoises', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'sana green': { group: 'Copper turquoises', location: 'cone 6', notes: ``, sourceTitle: '?', source: '', ingredients: `` },
  'fake old chinese celadon': { group: 'Copper turquoises', location: '', notes: `firing range cones 5-6`, sourceTitle: '', source: '', ingredients: `` },
  '85/15 turquoise': { group: 'Copper turquoises', location: '', notes: `firing range cones 5-6`, sourceTitle: '', source: '', ingredients: `` },
  'warm chun celadon': { group: 'Copper turquoises', firing: '', notes: `firing range cones 5-6`, sourceTitle: '', source: '', ingredients: `` },
  'fake korean celadon': { group: 'Copper turquoises', location: '', notes: `firing range cones 5-6`, sourceTitle: '', source: '', ingredients: `` },
  'opopots turquoise': { group: 'Copper turquoises', location: 'cone 8', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'bailey turquoise': { group: 'Copper turquoises', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'panama red': { group: 'Copper reds', location: '', notes: `firing range cones 6-9
  oxidation=green
  reduction=red`, sourceTitle: '', source: '', ingredients: `` },
  'easy red': { group: 'Copper reds', location: 'cone 9 reduction', notes: `"experiments in peach bloom"`, sourceTitle: '', source: '', ingredients: `` },
  'blush 2': { group: 'Copper reds', location: 'cone 9 reduction', notes: `for more pink speckle try 1 copper carb.`, sourceTitle: '', source: '', ingredients: `` },
  'blush 3': { group: 'Copper reds', location: 'cone 9 reduction', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'satin red': { group: 'Copper reds', location: 'cone 9 reduction', notes: `for stoneware`, sourceTitle: '', source: '', ingredients: `` },
  'copper red no.3': { group: 'Copper reds', location: 'cone 9 reduction', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'copper red no.4': { group: 'Copper reds', location: 'cone 9 reduction', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'copper red no.5': { group: 'Copper reds', location: 'cone 9 reduction', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'las vegas red': { group: 'Copper reds', location: 'cone 9 reduction', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'johns red': { group: 'Copper reds', location: 'cone 9 reduction', notes: `experiments in peach bloom`, sourceTitle: '', source: '', ingredients: `` },
  'norton red': { group: 'Copper reds', location: 'cone 9 reduction', notes: `experiments in peach bloom`, sourceTitle: '', source: '', ingredients: `` },
  'petes cranberry': { group: 'Copper reds', location: 'cone 9 reduction', notes: `experiments in peach bloom`, sourceTitle: '', source: '', ingredients: `` },
  'petes yellow': { group: 'Chrome', location: 'cone 4', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'daly red with titanium': { group: 'Copper reds', location: 'cone 9 reduction', notes: `experiments in peach bloom`, sourceTitle: '', source: '', ingredients: `` },
  'don davis copper red': { group: 'Copper reds', location: 'cone 9 reduction', notes: `tranparent`, sourceTitle: '', source: '', ingredients: `` },
  'copper red no.1': { group: 'Copper reds', location: 'cone 9 reduction', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'rosenrot': { group: 'Copper reds', location: 'cone 9 reduction', notes: `add 1.5 or 2.5 copper carbonate`, sourceTitle: '', source: '', ingredients: `` },
  'petes yellow': { group: 'Chrome', location: 'cone 04', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'chrome green': { group: 'Chrome', location: 'cone 4', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'natalies army green': { group: 'Chrome', location: 'cone 8', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'black mountain turquoise': { group: 'Chrome', location: 'cone 9', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'baxters chrome green': { group: 'Chrome', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'chrome hirsch satin': { group: 'Chrome', location: '', notes: `firing range cones 04-02`, sourceTitle: '', source: '', ingredients: `` },
  'chrome hirsch satin thin': { name: 'chrome hirsch satin', group: 'Chrome', location: '', notes: `firing range cones 04-02`, sourceTitle: '', source: '', ingredients: `` },
  'wrights spring green': { group: 'Chrome', location: '', notes: `firing range cones 5-6`, sourceTitle: '', source: '', ingredients: `` },
  'trans lime green': { group: 'Chrome', location: 'cone 8', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  "'blindingly bright green'": { group: 'Chrome', location: '', notes: `firing range cones 6-9
  This is not bright at all and was possibly named ironically.`, sourceTitle: '', source: '', ingredients: `` },
  'bright green no 0.4': { name:'bright green', group: 'Chrome', location: '', notes: `firing range cones 6-9
  and 0.5 to 1 copper carbonate`, sourceTitle: '', source: '', ingredients: `` },
  'bright green': { group: 'Chrome', location: '', notes: `firing range cones 6-9
  and 0.5 to 1 copper carbonate`, sourceTitle: '', source: '', ingredients: `` },
  'chrome odyssey over tenmoku gold': { group: 'Chrome', location: 'cone 9 reduction', notes: `stripes of odyssey 1% chrome
  painted over tenmoku gold
  one firing`, sourceTitle: '', source: '', ingredients: `` },
  'natalies raspberry': { group: 'Chrome-tin pinks', location: '', notes: `same base as grape
  see cobalt recipes

  firing range cones 8-9`, sourceTitle: '', source: '', ingredients: `` },
  'june perry purple': { group: 'Chrome-tin pinks', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'blush': { group: 'Chrome-tin pinks', location: '', notes: `stoneware
  firing range cones 8-9`, sourceTitle: '', source: '', ingredients: `` },
  'cranberry 2': { group: 'Chrome-tin pinks', location: 'cone 6', notes: ``, sourceTitle: '?', source: '', ingredients: `` },
  'raspberry': { group: 'Chrome-tin pinks', location: 'cone 6', notes: `for darker raspberry add 0.25
  cobalt carbonate`, sourceTitle: '', source: '', ingredients: `` },
  'raspberry dipped thin': { name:'raspberry', group: 'Chrome-tin pinks', location: 'cone 6', notes: `for darker raspberry add 0.25
  cobalt carbonate`, sourceTitle: '', source: '', ingredients: `` },
  'burgundy red': { group: 'Chrome-tin pinks', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'chrome red': { group: 'Chrome-tin pinks', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'opopots chrome red': { group: 'Chrome-tin pinks', location: 'cone 9', notes: ``, sourceTitle: 'Opopots', source: '', ingredients: `` },
  'cooper 240 pink': { group: 'Chrome-tin pinks', location: '', notes: `less chrome lighter pink:
  0.125, 0.0625

  firing range cones 7-8`, sourceTitle: '', source: '', ingredients: `` },
  'cone 6 pink': { group: 'Chrome-tin pinks', location: '', notes: `not too thick
  firing range cones 5-7`, sourceTitle: '', source: '', ingredients: `` },
  'june perry red': { group: 'Chrome-tin pinks', location: 'cone 6', notes: `thin/thick`, sourceTitle: '', source: '', ingredients: `` },
  'cranberry': { group: 'Chrome-tin pinks', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'cranberry dipped thin': { name: 'cranberry', group: 'Chrome-tin pinks', location: 'cone 6', notes: `dipped thin`, sourceTitle: '', source: '', ingredients: `` },
  'reliant red with fake ash blue': { group: 'Chrome-tin pinks', location: 'cone 6 ', notes: `same recipe as burgundy red
  except the chromium oxide

  Fake ash blue is sprayed lightly
  over the bottom of the tile only.
  one firing`, sourceTitle: '', source: '', ingredients: `` },
  'ochre crystalline': { group: 'Vanadium', location: '', notes: `firing range cones 7-9
  cool @50c/hr from 1100 to 800c`, sourceTitle: '', source: 'p124', ingredients: `` },
  'butternut': { group: 'Vanadium', location: 'cone 8', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'creature': { group: 'Vanadium', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'vanadium blue cream': { group: 'Vanadium', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'bob silver yellow': { group: 'Vanadium', location: 'cone 8', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'vanadium bringle slip': { group: 'Vanadium', location: 'cone 6 ', notes: `fire on greenware
  (unbisqued clay)`, sourceTitle: '', source: '', ingredients: `` },
  'vanadium stoneware slip': { group: 'Vanadium', location: 'cone 6', notes: `fire on greenware
  (unbisqued clay)`, sourceTitle: '', source: '', ingredients: `` },
  'vanadium common white slip': { group: 'Vanadium', location: 'cone 6', notes: `fire on greenware
  (unbisqued clay)
  can add up to 20 flint`, sourceTitle: '', source: '', ingredients: `` },
  'vanadium common white slip 2': { group: 'Vanadium', location: 'cone 6', notes: `fire on greenware
  (unbisqued clay)
  can add up to 20 flint`, sourceTitle: '', source: '', ingredients: `` },
  'crawler': { group: 'Vanadium', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'creeper': { group: 'Vanadium', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'vanadium common white slip2': { group: 'Vanadium', location: 'cone 6', notes: `fire on greenware
  (unbisqued clay)`, sourceTitle: '', source: '', ingredients: `` },
  'crystal orange blue': { group: 'Nickel', location: 'cone 6 crystal firing', notes: `cool @ 50c/hr. from 1100c to 800c
  fire on horizontal
surface, runny`, sourceTitle: '', source: '', ingredients: `` },
  "'mauve'": { group: 'Nickel', location: '', notes: `cone 8 or
  cone 7 crystal firing cool @ 50c/hr from 1100-800c
  This is obviously not mauve at all.`, sourceTitle: '', source: '', ingredients: `recipe lost` },
  'lana pink/purple': { group: 'Nickel', location: 'cone 8', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'barium nickel purple': { group: 'Nickel', location: 'cone 8', notes: `add 0.3- 2.5 nickel oxide for different shades
  also tried:
  3 nickel oxide, 2 red iron ox.
  or:
  3 nickel oxide, 2 red iron ox,
  0.5 cobalt carb `, sourceTitle: '', source: '', ingredients: `` },
  'barium nickel purple 2': { name: 'barium nickel purple', group: 'Nickel', location: '', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'nickel purple matte': { group: 'Nickel', location: '', notes: `firing range cones 6-8`, sourceTitle: '', source: '', ingredients: `` },
  'matte yellow': { group: 'Nickel', location: 'cone 6', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'johns nickel yellow': { group: 'Nickel', location: 'cone 5', notes: ``, sourceTitle: '', source: '', ingredients: `` },
  'pink nickel crystal': { group: 'Nickel', location: 'cone 9 crystal firing', notes: `cool @ 50c/hr. from 1100c to 800c`, sourceTitle: '', source: '', ingredients: `` },
  'deep matte mauve': { group: 'Nickel', location: 'cone 6', notes: `thick
  richer on red clay
  refire 06 to get grey-purple`, sourceTitle: '', source: '', ingredients: `` }

};
