<?php 
	header('Content-type: application/json');

	define('inf', 0x3f3f3f3f);
	$infoAry = array();
	$city = $_POST['city'];
	$start = $_POST['start'];
	$end = $_POST['end'];

	function getInfoAry ($city) {
		$json = file_get_contents("distances.json");
		$infoAry = json_decode($json, true);
		return $infoAry;
	}

	function addInfo(){
		$graph = array();
		$decodeJson = getInfoAry($city);
		foreach ($decodeJson as $edge) {
			$graph[$edge[0]][$edge[1]] = $edge[2];
			$graph[$edge[1]][$edge[0]] = $edge[2];
		}
		return $graph;
	}

	function shortestPath ($source, $target) {
		$graph = addInfo();
		
		if (!array_key_exists($source, $graph) || !array_key_exists($target, $graph)) {return inf;}

		$dist = array();
		$visited = array();
		$numVertex = 0;
	
		foreach ($graph as $key => $value) {
			$dist[$key] = inf;
			$numVertex++;
		}
		$dist[$source] = 0;
		for ($i=0; $i < $numVertex; $i++) { 
			$minDist = inf;
			$minV;
			foreach ($dist as $v => $value) {
				if (!array_key_exists($v, $visited)) {
					if($minDist > $dist[$v]){
						$minDist = $dist[$v];
						$minV = $v;
					}
				}
				else;				
			}

			if (!$minV) break;
			if ($minV == $target) return $minDist;
			$visited[$minV] = true;
			$edges = $graph[$minV];
			foreach ($edges as $v => $value) {
				if (!array_key_exists($v, $visited)) {
					$newDist = $minDist + $edges[$v];
					if ($dist[$v] > $newDist) $dist[$v] = $newDist;
			} else;
		}
	}
	return inf;
}
	$resultJson = array(
		'start' => $start,
		'end' => $end,
		'distance' => shortestPath($start, $end)
		);
	echo json_encode($resultJson);
	
?>