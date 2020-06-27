const textPatternObj = {
  "text":[
    "Жили-были {var1} да {var2}. ",
    "Была у них {var3}. ",
    "Снесла {var3} {var4}, не простое - золотое. ",
    "- {var1} бил, бил - не разбил. ",
    "- {var2} била, била - не разбила. ",
    "{var5} бежала, {var6} задела, {var4} упало и разбилось. ",
    "{var1} плачет, {var2} плачет, а {var3} кудахчет: ",
    "\"{speach}\""]}

$(".create-btn").click(function() {
  $(".result").html(textPatternObj.text)
    });

$(".replace-btn").click(function() {
  // const arrInput = $("input");
  // for (let i=1; i <= arrInput.length; i++)
  //   console.log($("#var"+i).val());

    const textReplacedObj = {
      "text":[
        `Жили-были ${$("#var" + 1).val()} да ${$("#var" + 2).val()}. `,
        `Была у них ${$("#var" + 3).val()}. `,
        `Снесла ${$("#var" + 3).val()} ${$("#var" + 4).val()}, не простое - золотое. `,
        `- ${$("#var" + 1).val()} бил, бил - не разбил. `,
        `- ${$("#var" + 2).val()} била, била - не разбила. `,
        `${$("#var" + 5).val()} бежала, ${$("#var" + 6).val()} задела, ${$("#var" + 4).val()} упало и разбилось. `,
        `${$("#var" + 1).val()} плачет, ${$("#var" + 2).val()} плачет, а ${$("#var" + 3).val()} кудахчет: `,
        `\"${$("#var" + 7).val()}\"`]}

        $(".result").html(textReplacedObj.text)
    });

