import React from "react";
import * as THREE from "three";
import { useContextBridge } from "@react-three/drei";

/*
So the way it works is you have 2 contextes
You combine them into a ContextBridge.
This is then used to wrap the entire scene, but 
is within the Canvas scope.

in the example they used they used the first context to define
certain values, I'm assuming its for simplicity.

So what you do is:




*/